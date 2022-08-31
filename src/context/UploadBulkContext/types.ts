import {DataVerify} from 'services/models';

export type UploadBulkContextError = string[][];

export type State = {
  step: number;
  isValid: boolean;
  files: File[];
  status: UploadStatus;
  products: DataVerify[];
  error: UploadBulkContextError;
  productsRepeated: number;
  nonexistentCategories: string[];
  duplicateStrategy: null | 'override' | 'add-stock';
  buttonStep: number;
};
export type UploadStatus = 'normal' | 'error' | 'success' | 'info';

export interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
