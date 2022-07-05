export interface GetProductsTypes {
  page: number;
  size: number;
  categoryId: number;
  keyword?: string;
  warehouseId?: string;
}
