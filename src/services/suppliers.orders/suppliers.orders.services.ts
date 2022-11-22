import {AxiosResponse} from 'axios';

import {Order, DownloadOrders} from 'services/models';
import {ApiProvider} from 'providers/api-provider';
import {Status} from 'hooks/useOrders';
import {StatusResponse, PropTypesGetOrders} from './types';

export class OrderServices {
  private api: ApiProvider;
  constructor() {
    this.api = ApiProvider.getInstance();
  }

  getOrders({
    page,
    size,
    statusId,
    dateFrom,
    dateTo,
    keyword,
  }: PropTypesGetOrders): Promise<AxiosResponse<Order[]>> {
    const pageParam = page ? `page=${page}` : '';
    const sizeParam = size ? `&size=${size}` : '';
    const dateParam =
      dateFrom && dateTo ? `&dateFrom=${dateFrom}&dateTo=${dateTo}` : '';
    const statusIdParam = statusId ? `&statusId=${statusId}` : '';
    const keywordParam = keyword && keyword.length ? `&keyword=${keyword}` : '';
    return this.api.get<Order[]>(
      `/suppliers/orders?${pageParam}${sizeParam}${dateParam}${statusIdParam}${keywordParam}`,
    );
  }

  setStateOrders({
    items,
    statusId,
  }: Status): Promise<AxiosResponse<StatusResponse>> {
    return this.api.patch(`/suppliers/orders/status`, {
      orders: items?.map(item => ({orderId: item, statusId})),
    });
  }

  getOrdersByDay(date: string): Promise<AxiosResponse<DownloadOrders[]>> {
    const dateParam = date;
    return this.api.get<Order[]>(`/suppliers/orders/batch-by-day/${dateParam}`);
  }
}
