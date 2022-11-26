export interface DeliversProps {
  id?: string;
  name?: string;
  supplierId?: string;
  batches?: BatchetItem;
}

export interface BatchetItem {
  hour?: string;
  isEnable?: boolean;
}
