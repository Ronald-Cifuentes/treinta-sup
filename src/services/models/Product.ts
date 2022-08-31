import {Pagination} from './GeneralTypes';

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  hasAgeRestriction: boolean;
  description: string;
  thumbImgUrl: string;
  largeImgUrl: string;
  weight: number;
  categoryName: string;
  stock: number;
}

export interface Products {
  items: Product[];
  pagination: Pagination;
}
export interface Category {
  name: string;
  id: number;
  thumbImgUrl: string;
  parentId: number;
}

export interface Categories {
  items: Category[];
}

export interface Warehouse {
  id: string;
  name: string;
  address: string;
}

export interface Warehouses {
  items: Warehouse[];
}

export interface UploadProduct extends DataVerify {}

export interface DataVerify {
  productName?: string;
  productLargeImgUrl?: string;
  productThumbImgUrl?: string;
  productDescription?: string;
  productCategoryName?: string;
  productSKU?: string;
  productInternalCode?: string;
  productMeasurement?: string;
  productMeasurementQuantity?: number;
  productHasAgeRestriction?: boolean;
  warehouseName?: string;
  warehouseProductStock?: number;
  warehouseProductStockLimit?: number;
  warehouseProductSalePrice?: number;
  warehouseProductIsShowedInMarketplace?: boolean;
}

export interface ProductDataResponse {
  productName: string;
  productLargeImgUrl: string;
  productThumbImgUrl: string;
  productDescription: string;
  productCategoryName: string;
  productSKU: string;
  productInternalCode: string;
  productMeasurement: string;
  productMeasurementQuantity: number;
  productHasAgeRestriction: boolean;
  warehouseName: string;
  warehouseProductStock: number;
  warehouseProductStockLimit: number;
  warehouseProductSalePrice: number;
  warehouseProductIsShowedInMarketplace: boolean;
  productId: string;
  warehouseId: string;
  warehouseProductId: string;
  categoryId: number;
  measurementId: number;
}
export interface VerifyProps {
  rows: DataVerify[];
  overwrite: boolean;
}

export interface MassiveSaveProps extends VerifyProps {}

export interface VerifyResponseSuccess {
  statusCode: number;
  message: string;
  error: string;
  toInsert: [];
  toUpdate: [];
  toInsertRaw: ProductDataResponse[];
  toUpdateRaw: ProductDataResponse[];
}
export interface VerifyResponseError {
  statusCode: number;
  message: string[] | string;
  error: string[];
}

export interface MassiveSaveResponseSuccess extends VerifyResponseSuccess {}
export interface MassiveSaveResponseError extends VerifyResponseError {}
