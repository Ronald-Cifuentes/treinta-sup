import {FileRejection} from 'react-dropzone';
import XLSX from 'xlsx';

import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {UploadProduct} from 'services/models';

import {SuppliersProductsServices} from 'services/suppliers.products/suppliers.products.services';
import {useTranslation} from 'react-i18next';
import {ProductFile, UseParseXlsxOutput} from './types';

const reader = new FileReader();
const suppliersProductsServices = new SuppliersProductsServices();

export const useParseXlsx = (): UseParseXlsxOutput => {
  const {dispatch} = useUploadBulk();
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
        'categoryVisible',
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
    try {
      const ab = event.target?.result;
      const products = parseFile(ab);
      if (!products.length) {
        dispatch({
          type: ACTIONS.UPLOAD_FILE_ERROR,
          payload: {
            error: t('bulk-upload.error-without-products'),
          },
        });
      } else {
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
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      dispatch({
        type: ACTIONS.UPLOAD_FILE_ERROR,
        payload: {
          error: t('bulk-upload.error-upload-file'),
        },
      });
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
  return {onFilesChange};
};
