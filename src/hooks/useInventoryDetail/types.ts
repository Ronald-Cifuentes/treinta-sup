/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {GetProductIdProps} from 'services/suppliers.product.detail/types';
import {Actions} from 'hooks/types';
import {ProductDetails} from 'services/models/Product.Detail';

export interface UseProductDetailTypes extends GetProductIdProps {}

export interface UseProductDetail {
  refetchProductDetail: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<ProductDetails, unknown>>;
  isErrorProductDetail: boolean;
  isLoadingProductDetail: boolean;
  isSuccessProductDetail: boolean;
  dataProductDetail: ProductDetails;
  dispatch: (value: ActionProductDetail) => void;
}

export interface ProductDetailReducerResponse extends ProductDetails {}
export interface StateProductDetailTypes extends ProductDetails {}
export interface ActionProductDetail extends Actions {}
