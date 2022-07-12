export interface GetDetailTypes {
  id?: string;
}

export interface ProductsTypes {
  warehouseProductId: string;
  quantity?: number;
  baseValue?: number;
}

export interface SetDetailTypes {
  id?: string;
  data?: {[key: string]: unknown};
}
