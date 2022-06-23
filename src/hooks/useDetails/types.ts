/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {Detail} from 'services/models';

export interface DataProduct {
  id: string;
  name: string;
  sku: string;
  quantityOrdered: number;
  quantityToDispatch: number;
  initialQuantity: number;
  discount: number;
  totalPrice: number;
  image: string;
}

export interface UseDetails {
  refetchDetail: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<Detail[], unknown>>;
  isErrorDetail: boolean;
  isLoadingDetail: boolean;
  isSuccessDetail: boolean;
  dataProduct: DataProduct[];
  dataDetail: Detail;
  dispatch: (value: ActionDetails) => void;
}

export interface ActionDetails {
  type: string;
  payload?: object;
}

export interface TypePropsUseDetails {
  id?: string;
}
