import {Product} from 'modules/Dashboard/Orders/components/atoms/LayoutProduct/types';

export interface StepTwoProps {
  prop?: string;
}

export interface PrintProducts {
  status: number;
  product: Product;
}
