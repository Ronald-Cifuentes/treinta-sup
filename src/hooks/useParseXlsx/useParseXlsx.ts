import {FileRejection} from 'react-dropzone';
import XLSX from 'xlsx';

import {AxiosError} from 'axios';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {UploadProduct} from 'services/models';
import {SuppliersProductsServices} from 'services/suppliers.products/suppliers.products.services';
import {ProductFile, UseParseXlsxOutput} from './types';

const reader = new FileReader();
const suppliersProductsServices = new SuppliersProductsServices();

export const useParseXlsx = (): UseParseXlsxOutput => {
  const {state, dispatch} = useUploadBulk();
  const history = useNavigate();
  const {t} = useTranslation();

  const parseFile = (
    ab: string | ArrayBuffer | null | undefined,
  ): UploadProduct[] => {
    const wb = XLSX.read(ab, {type: 'array'});
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data: ProductFile[] = XLSX.utils.sheet_to_json(ws, {
      header: [
        'productName',
        'productDescription',
        'productCategoryName',
        'productSKU',
        'productMeasurement',
        'productMeasurementQuantity',
        'productHasAgeRestriction',
        'productInternalCode',
        'warehouseName',
        'warehouseProductStock',
        'warehouseProductStockLimit',
        'warehouseProductSalePrice',
        'warehouseProductIsShowedInMarketplace',
        'productLargeImgUrl',
        'productThumbImgUrl',
      ],
      blankrows: false,
    });
    return data.slice(6);
  };

  const onReaderError = (): void => {
    dispatch({
      type: ACTIONS.UPLOAD_FILE_ERROR,
      payload: {
        error: t('bulk-upload.error-invalid-format'),
      },
    });
  };

  const onReaderLoad = async (
    event: ProgressEvent<FileReader>,
  ): Promise<void> => {
    const ab = event.target?.result;
    const products = parseFile(ab);
    try {
      if (!products.length) {
        dispatch({
          type: ACTIONS.UPLOAD_FILE_ERROR,
          payload: {
            error: t('bulk-upload.error-without-products'),
          },
        });
      } else {
        if (products.length <= 500) {
          const res = await suppliersProductsServices.verify({
            rows: products,
            overwrite: false,
          });

          if (res.data.error?.length > 0) {
            if (
              res.data.error.includes('There are') &&
              res.data.error.includes('rows duplicates')
            ) {
              dispatch({
                type: ACTIONS.UPLOAD_FILE_ERROR,
                payload: {
                  error: t('bulk-upload.error-products-repeated'),
                },
              });
            }
          } else {
            if (res.data?.toUpdateRaw.length > 0) {
              dispatch({
                type: ACTIONS.UPLOAD_PRODUCTSREPEATED,
                payload: {
                  productsRepeated: parseInt(`${res.data?.toUpdateRaw.length}`),
                },
              });
            } else {
              dispatch({
                type: ACTIONS.UPLOAD_PRODUCTSREPEATED,
                payload: {
                  productsRepeated: 0,
                },
              });
              dispatch({type: ACTIONS.SET_IS_VALID, payload: true});
            }

            const allProductsBackend = [
              ...res.data.toInsertRaw,
              ...res.data.toUpdateRaw,
            ];

            const productsMerged: UploadProduct[] = [];
            products.forEach(item => {
              const indexFound = allProductsBackend.findIndex(
                item2 => item2.productSKU === item.productSKU?.toString(),
              );
              if (indexFound !== -1) {
                const productResultInfo = allProductsBackend.splice(
                  indexFound,
                  1,
                );

                productsMerged.push({
                  ...item,
                  productThumbImgUrl: productResultInfo[0].productThumbImgUrl,
                });
              }
            });
            dispatch({
              type: ACTIONS.UPLOAD_COMPLETED,
              payload: {products: productsMerged},
            });
          }
        } else {
          dispatch({
            type: ACTIONS.UPLOAD_FILE_ERROR,
            payload: {
              error: t('bulk-upload.error-500-products'),
            },
          });
        }
      }
    } catch (error) {
      const realError = <AxiosError>error;
      if (products.length) {
        dispatch({
          type: ACTIONS.UPLOAD_PRODUCTSREPEATED,
          payload: {
            productsRepeated: 0,
          },
        });
        dispatch({type: ACTIONS.SET_IS_VALID, payload: true});
        dispatch({type: ACTIONS.UPLOAD_COMPLETED, payload: {products}});
        dispatch({
          type: ACTIONS.SET_STACK_ERROR,
          payload: {error: realError.response?.data},
        });
      }
    }
  };

  const invalidFile = (fileRejections: FileRejection[]): void => {
    const {errors} = fileRejections[0];
    if (errors[0].code == 'file-too-large') {
      const {file} = fileRejections[0];
      dispatch({
        type: ACTIONS.UPLOAD_FILE_ERROR,
        payload: {
          error: t('bulk-upload.error-file-bigger'),
          file,
        },
      });
    }

    if (errors[0].code == 'file-invalid-type') {
      const {file} = fileRejections[0];
      dispatch({
        type: ACTIONS.UPLOAD_FILE_ERROR,
        payload: {
          error: t('bulk-upload.error-invalid-format'),
          file,
        },
      });
    }
  };

  const validFile = (acceptFiles): void => {
    const file = acceptFiles[0];
    dispatch({
      type: ACTIONS.UPLOAD_FILE_SUCCESS,
      payload: {file, productsRepeated: 0},
    });

    reader.onload = onReaderLoad;

    reader.readAsArrayBuffer(file);

    reader.onerror = onReaderError;
  };

  const onFilesChange = (
    acceptFiles: File[],
    fileRejections: FileRejection[],
  ): void => {
    if (fileRejections.length > 0) {
      invalidFile(fileRejections);
    } else {
      validFile(acceptFiles);
    }
  };

  const massiveSave = async (): Promise<void> => {
    try {
      const res = await suppliersProductsServices.massiveSave({
        rows: state.products,
        overwrite: state.duplicateStrategy == 'override',
      });
      if (res.status == 200) {
        if (res.data.error) {
          history({pathname: '/inventario/bulkload/error'});
        } else {
          dispatch({
            type: ACTIONS.UPLOAD_FILE_RESET,
          });
          history({pathname: '/inventario/bulkload/success'});
        }
      }
    } catch (error) {
      history({pathname: '/inventario/bulkload/error'});
    }
  };
  return {onFilesChange, massiveSave};
};
