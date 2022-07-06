export interface WarehouseDetailDiscount {
  is_active: boolean;
  value: string;
}

export interface WarehouseDetail {
  id: number;
  warehouseId: string;
  warehouseName: string;
  price: number;
  stock: number;
  isOutOfStock: boolean;
  extID: string;
  stockLimit: number;
  discount: WarehouseDetailDiscount[] | number | string;
}

export interface ProductDetails {
  name: string;
  imgUrl: string;
  sku: string;
  units: number;
  weight: number;
  hasAgeRestriction: boolean;
  description: string;
  categoryName: string;
  measurementType: string;
  warehouseDetails: WarehouseDetail[];
}
