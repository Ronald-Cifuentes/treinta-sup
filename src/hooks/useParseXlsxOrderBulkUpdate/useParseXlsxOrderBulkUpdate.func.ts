import XLSX from 'xlsx';
import {optionsTabs} from 'modules/Dashboard/Orders/components/organisms/OrderList/OrderList.config';
import {MassiveStatusVerification} from './../../services/suppliers.orders/types';
import {StatesFile} from './types';

export const parseFile = (
  ab: string | ArrayBuffer | null | undefined,
): StatesFile => {
  const wb = XLSX.read(ab, {type: 'array'});
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];
  const data = XLSX.utils.sheet_to_json(ws, {
    header: 'A',
    blankrows: false,
  }) as unknown as StatesFile;
  return data;
};

export const formatData = (states): MassiveStatusVerification[] => {
  const statesMap = states.slice(2);
  return statesMap.map(element => ({
    sequenceId: element?.['A'],
    status: optionsTabs.find(x => x.label === element?.['B'])?.key,
    typification: element?.['C'],
  }));
};
