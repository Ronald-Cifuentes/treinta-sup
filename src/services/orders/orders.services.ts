import { AxiosResponse } from 'axios';

import { Order } from 'services/models';
import { ApiProvider } from 'providers/api-provider';

export interface PropTypesGetOrders {
  page: number;
  size: number;
  statusId: number;
  dateFrom?: string | Date | undefined;
  dateTo?: string | Date | undefined;
}

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
  }: PropTypesGetOrders): Promise<AxiosResponse<Order[]>> {
    const pageParam = page ? `&page=${page}` : '';
    const sizeParam = size ? `&size=${size}` : '';
    const dateParam = dateFrom && dateTo ? `&dateFrom=${dateFrom}&dateTo=${dateTo}` : '';
    const statusIdParam = statusId ? `&statusId=${statusId}` : '';
    return this.api.get<Order[]>(
      `/orders?=${pageParam}${sizeParam}${dateParam}${statusIdParam}`,
    );
  }
}
