import {DataVerify} from 'services/models';

export interface ProductNameProps {
  product: DataVerify;
  dataTestIdName?: string;
}

export interface ProductDeleteProps {
  deleteProduct: () => void;
  dataTestId: string;
}
