/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {Products} from 'services/models';
import {GetProductsTypes} from 'services/suppliers.products/types';
import {Actions} from 'hooks/types';

export interface UseProductsTypes extends GetProductsTypes {}

export interface UseProducts {
  refetchProducts: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<Products, unknown>>;
  isErrorProducts: boolean;
  isLoadingProducts: boolean;
  isSuccessProducts: boolean;
  dataProducts: Products;
  dispatch: (value: ActionProducts) => void;
}

export interface ProductsReducerResponse extends Products {}
export interface StateProductsTypes extends Products {}
export interface ActionProducts extends Actions {}
