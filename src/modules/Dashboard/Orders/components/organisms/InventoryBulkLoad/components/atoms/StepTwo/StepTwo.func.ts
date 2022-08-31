import {DataVerify} from 'services/models';

export const getAllIndexOf = (arr: DataVerify[], str: string): number[] => {
  const temp: number[] = [];
  arr.forEach((x, ind) => {
    if (x.productName == str) {
      temp?.push(ind);
    }
  });
  return temp;
};

export const getStatus = (arr: DataVerify[], item: DataVerify): number => {
  const temp = getAllIndexOf(arr, `${item.productName}`);
  return temp?.length < 2 ? 0 : temp?.length;
};
