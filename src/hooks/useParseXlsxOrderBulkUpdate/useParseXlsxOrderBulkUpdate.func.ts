import XLSX from 'xlsx';
import {StatesFile} from './types';

export const parseFile = (
  ab: string | ArrayBuffer | null | undefined,
): StatesFile[] => {
  const wb = XLSX.read(ab, {type: 'array'});
  const wsname = wb.SheetNames[0];
  const ws = wb.Sheets[wsname];
  const data: StatesFile[] = XLSX.utils.sheet_to_json(ws, {
    header: ['consecutive', 'status', 'typification'],
    blankrows: false,
  });
  return data.slice(6);
};
