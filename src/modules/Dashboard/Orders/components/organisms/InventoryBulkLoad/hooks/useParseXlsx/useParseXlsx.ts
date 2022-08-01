import {FileRejection} from 'react-dropzone';
import XLSX from 'xlsx';

import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {UploadProduct} from 'services/models';

import {useTranslation} from 'react-i18next';
import {ProductFile, UseParseXlsxOutput} from './types';

const reader = new FileReader();

export const useParseXlsx = (): UseParseXlsxOutput => {
  const {dispatch} = useUploadBulk();
  const {t} = useTranslation();

  const castToString = (value: string | number): string =>
    (value ? String(value) : '').trim();

  const parseFile = (
    ab: string | ArrayBuffer | null | undefined,
  ): UploadProduct[] => {
    const wb = XLSX.read(ab, {type: 'array'});
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data: ProductFile[] = XLSX.utils.sheet_to_json(ws, {
      header: [
        'name',
        'description',
        'category',
        'categoryVisible',
        'sku',
        'unitType',
        'price',
        'quantity',
        'ageRestrict',
        'internalCode',
        'nameStore',
        'avaliableUnits',
        'stock',
        'cost',
        'productVisible',
      ],
      blankrows: false,
    });
    return (
      data
        //Ignore header rows
        .slice(6)
        .map(({isVisible, sku, name, category, notes, ...other}) => ({
          ...other,
          key: `${name}-${sku}`,
          name: castToString(name),
          originalName: castToString(name),
          sku: castToString(sku),
          originalSku: castToString(sku),
          category: castToString(category),
          notes: castToString(notes),
          isVisible: ['si', 'sí', 'sim'].includes(
            isVisible?.toLocaleLowerCase(),
          ),
        }))
    );
  };

  const onReaderError = (): void => {
    dispatch({
      type: ACTIONS.UPLOAD_FILE_ERROR,
      payload: {
        error: t('bulk-upload.error-upload-file'),
      },
    });
  };

  const validateDuplicateSkuAndDifferentName = (
    inventoryProducts: UploadProduct[],
    products: UploadProduct[],
  ): UploadProduct[] => {
    const allProducts = [...inventoryProducts, ...products];
    const allSkus = allProducts.map(({sku}) => sku).filter(sku => sku);
    const productsWithDuplicateSku = allProducts.filter(
      ({sku}) => allSkus.indexOf(sku) !== allSkus.lastIndexOf(sku),
    );
    const hasRepeatedSku = productsWithDuplicateSku.filter(({id}) => id);
    const newProducts = products.map(product => {
      const [productWithSameSku] = hasRepeatedSku.filter(
        ({sku}) => sku === product.sku,
      );
      if (productWithSameSku && productWithSameSku.name !== product.name) {
        return {
          ...product,
          name: productWithSameSku.name,
          duplicateSku: product.sku,
          originalName: product.name,
        };
      } else {
        return product;
      }
    });
    return newProducts;
  };

  const onReaderLoad = (event: ProgressEvent<FileReader>): void => {
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
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      dispatch({
        type: ACTIONS.UPLOAD_FILE_ERROR,
        payload: {
          error: 'No pudimos cargar tu archivo. Por favor, inténtalo de nuevo.',
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
          error: t('bulk-upload.error-upload-file'),
          file,
        },
      });
    }
  };

  const validFile = (acceptFiles): void => {
    const file = acceptFiles[0];
    dispatch({type: ACTIONS.UPLOAD_FILE_SUCCESS, payload: {file}});

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
  return {
    onFilesChange,
    validateDuplicateSkuAndDifferentName,
  };
};
