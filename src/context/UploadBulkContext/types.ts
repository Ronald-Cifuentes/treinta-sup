import {DataVerify, VerifyResponseError} from 'services/models';

export type ErrorStack = {
  status?: UploadStatus;
  error?: VerifyResponseError;
  errorFormatted?: string[][];
  errorMessage?: string;
  isValid?: boolean;
};

export type State = {
  step: number;
  isValid: boolean;
  files: File[];
  status: UploadStatus;
  products: DataVerify[];
  error: VerifyResponseError;
  errorFormatted: string[][];
  errorMessage: string;
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
