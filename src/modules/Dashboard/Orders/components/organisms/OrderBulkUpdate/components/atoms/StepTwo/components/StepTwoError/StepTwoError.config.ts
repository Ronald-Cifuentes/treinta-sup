import {GenericResponseWithMsg} from 'services/suppliers.orders/types';

export const optionsTypificationErrors = [
  {key: 'Not matching rows', value: 'Consecutivo no existe'},
  {
    key: 'Typification does not match order status',
    value: 'Tipificación incorrecta',
  },
  {
    key: 'Duplicate order',
    value: 'Consecutivo duplicado',
  },
];

export const pagination = (
  arr: GenericResponseWithMsg[],
  currentPage: number,
  recordsPerPage: number,
): GenericResponseWithMsg[] => {
  const indexOfFirstRecord = currentPage == 1 ? 0 : recordsPerPage;
  const indexOfLastRecord = currentPage * recordsPerPage;
  return arr.slice(indexOfFirstRecord, indexOfLastRecord);
};
