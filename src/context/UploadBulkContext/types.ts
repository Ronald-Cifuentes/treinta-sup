import {Product} from 'services/models';

export type State = {
  step: number;
  isValid: boolean;
  files: File[];
  status: UploadStatus;
  products: ProductWithErrors[];
  error: string;
  productsRepeated: number;
  nonexistentCategories: string[];
  duplicateStrategy: null | 'override' | 'add-stock';
};
export type UploadStatus = 'normal' | 'error' | 'success' | 'info';

export interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

export interface ProductWithErrors extends Product {
  key: string;
  errors: string[];
  cost: number;
}

export interface PayloadData {
  productsRepeated: number;
  currentProducts: Product[];
  option: null | 'override' | 'add-stock';
  cost: number;
}
