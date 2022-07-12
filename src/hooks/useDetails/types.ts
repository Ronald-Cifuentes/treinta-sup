/* eslint-disable @typescript-eslint/no-explicit-any */

import {AxiosResponse} from 'axios';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  UseMutateAsyncFunction,
} from 'react-query';
import {SetDetailTypes} from 'services/suppliers.details/types';
import {DataDetailTypes} from 'services/models';

export interface DataProduct {
  id: string;
  name: string;
  sku: string;
  quantityOrdered: number;
  quantityToDispatch: number;
  initialPrice: number;
  discount: number;
  totalPrice: number;
  image: string;
  warehouseProductId: string;
}

export interface UseDetails {
  refetchDetail: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<DataDetailTypes[], unknown>>;
  isErrorDetail: boolean;
  isLoadingDetail: boolean;
  isSuccessDetail: boolean;
  dataProduct: DataProduct[];
  dataDetail: DataDetailTypes;
  isErrorSetDetail: unknown;
  isLoadingSetDetail: boolean;
  mutateSetDetail: UseMutateAsyncFunction<
    AxiosResponse<DataDetailTypes[], any>,
    unknown,
    SetDetailTypes,
    unknown
  >;
  dispatch: (value: ActionDetails) => void;
}

export interface ActionDetails {
  type: string;
  payload?: object;
}

export interface TypePropsUseDetails {
  id?: string;
}
