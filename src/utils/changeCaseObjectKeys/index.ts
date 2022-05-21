import {camelCase, snakeCase} from 'change-case';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformKeys = (obj: any, fn: any): unknown => {
  if (typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(row => transformKeys(row, fn));
  }
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return keys.reduce((acc, key, index) => {
    const value =
      typeof values[index] === 'object' && values[index] !== null
        ? transformKeys(values[index], fn)
        : values[index];
    acc[fn(key)] = value;
    return acc;
  }, {});
};

export const camelizeKeys = (obj: unknown): unknown =>
  transformKeys(obj, camelCase);

export const snakeCaseKeys = (obj: unknown): unknown =>
  transformKeys(obj, snakeCase);
