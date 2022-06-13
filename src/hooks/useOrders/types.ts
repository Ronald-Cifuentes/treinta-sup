/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  RefetchOptions,
  QueryObserverResult,
  RefetchQueryFilters,
} from 'react-query';

export interface FormattedOrder {
  id: string;
  value: number;
  appliedDiscount: number;
  status: OrderStatus;
  comments: string;
  deliveryDate: string;
  createdAt: string;
  updatedAt: string;
  customerName: string;
  phone?: string;
}

export interface UseOrders {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  data: OrdersResponse;
  setSelectedOrder: (value: string) => void;
  selectedOrder: string;
  dispatch: (value: ActionOrders) => void;
  refreshOrders: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<unknown, unknown>>;
}

export interface ActionOrders {
  type: string;
  payload?: any;
}

export interface Pagination {
  pagesNumber?: number;
  itemsNumber?: number;
  itemsByPage?: number;
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
  items?: Array<Order>;
}
export interface OrderProduct {
  field: string;
  order?: string;
  eventName?: string;
}
