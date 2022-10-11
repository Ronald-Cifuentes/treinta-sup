export interface WarehouseDetailDiscount {
  discount: unknown;
  discountprice: number;
  extid: string;
  isoutofstock: false;
  isvisible: true;
  price: number;
  stock: number;
  stocklimit: number;
  warehouseid: string;
  warehousename: string;
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
  discount: WarehouseDetailDiscount;
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
