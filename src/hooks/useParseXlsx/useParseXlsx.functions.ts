import {ErrorStack} from 'context/UploadBulkContext';
import {
  DetailsResponse,
  UploadProduct,
  VerifyResponseError,
} from 'services/models';
import XLSX from 'xlsx';
import {ERRORS, ProductFile} from './types';

export const parseFile = (
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

export const decodeRow = (ArrayIn: DetailsResponse[]): string[][] => {
  const tmpArray: string[][] = [[]];
  if (typeof ArrayIn == 'object') {
    ArrayIn.forEach(x => {
      const ind = parseInt(x.key?.split('.')[1]);
      if (typeof tmpArray[ind] == 'undefined') {
        tmpArray[ind] = [];
      }
      tmpArray[ind]?.push(x.key?.split('.')[2]);
    });
  }
  return tmpArray;
};

export const format400 = (error: VerifyResponseError): ErrorStack => {
  switch (error.message) {
    case ERRORS.ERROR_400_CASE_1:
      return {
        error,
        errorFormatted: decodeRow(error.details),
        errorMessage: ERRORS.ERROR_400_MSG_1,
        isValid: true,
      };
    default:
      return {
        status: 'error',
        errorMessage: ERRORS.ERROR_400_MSG_DEFAULT,
      };
  }
};

export const format406 = (error: VerifyResponseError): ErrorStack => {
  switch (error.message) {
    case ERRORS.ERROR_406_CASE_1:
      return {
        status: 'error',
        errorMessage: ERRORS.ERROR_406_MSG_1,
      };
    default:
      return {
        status: 'error',
        errorMessage: ERRORS.ERROR_406_MSG_DEFAULT,
      };
  }
};

export const format409 = (error: VerifyResponseError): ErrorStack => {
  switch (true) {
    case error.message.includes(ERRORS.ERROR_409_CASE_1_PART_1) &&
      error.message.includes(ERRORS.ERROR_409_CASE_1_PART_2):
      return {
        status: 'error',
        error,
        errorMessage: ERRORS.ERROR_409_MSG_1,
      };
    default:
      return {
        status: 'error',
        errorMessage: ERRORS.ERROR_409_MSG_DEFAULT,
      };
  }
};

export const formatError = ({type, error}): ErrorStack => {
  const formatFns = {
    '400': format400,
    '406': format406,
    '409': format409,
  };
  const ExeFunction = formatFns[type] || format400;
  return ExeFunction(error);
};
