export interface DownloadOrders {
  id?: string;
  name?: string;
  supplierId?: string;
  batches?: BatchItem;
}

export interface BatchItem {
  hour?: string;
  isEnable?: boolean;
}
