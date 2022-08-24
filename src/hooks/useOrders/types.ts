/* eslint-disable @typescript-eslint/no-explicit-any */
import {AxiosResponse} from 'axios';
import {
  RefetchOptions,
  QueryObserverResult,
  RefetchQueryFilters,
  UseMutateAsyncFunction,
} from 'react-query';
import {Pagination} from 'services/models';

export interface UseOrders {
  isErrorRetrieve: boolean;
  isLoadingRetrieve: boolean;
  isSuccessRetrieve: boolean;
  dataRetrieve: OrdersResponse;
  dispatchRetrieve: (value: ActionOrders) => void;
  refetchRetrieve: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<unknown, unknown>>;
  isErrorSetState: unknown;
  isLoadingSetState: boolean;
  mutateSetState: UseMutateAsyncFunction<
    AxiosResponse<unknown, any>,
    unknown,
    Status,
    unknown
  >;
}

export interface ActionOrders {
  type: string;
  payload?: any;
}

export interface OrderStatus {
  id: number;
  name: string;
}

export interface Order {
  id: string;
  value: number;
  appliedDiscount?: number;
  status: OrderStatus;
  comments?: string;
  deliveryDate: string;
  createdAt: string;
  updatedAt: string;
  customerName: string;
  phone?: string;
}

export interface OrdersResponse {
  pagination: Pagination;
  items?: Order[];
}

export interface TypePropsUseOrders {
  page?: number;
  size?: number;
  statusId?: number;
  dateFrom?: string | Date;
  dateTo?: string | Date;
  keyword?: string;
}

export interface Status {
  items?: Array<string | number>;
  statusId?: number;
}
