export interface StatusResponse {
  errors: unknown;
  success: unknown;
}

export interface PropTypesGetOrders {
  page: number;
  size: number;
  statusId?: number;
  dateFrom?: string | Date | undefined;
  dateTo?: string | Date | undefined;
}
