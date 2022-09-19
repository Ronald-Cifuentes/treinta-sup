import {AxiosResponse} from 'axios';
import {ApiProvider} from 'providers/api-provider';
import {
  Categories,
  MassiveSaveProps,
  MassiveSaveResponseSuccess,
  Products,
  VerifyProps,
  VerifyResponseSuccess,
} from '../models/Product';
import {GetProductsTypes} from './types';

export class SuppliersProductsServices {
  private api: ApiProvider;
  constructor() {
    this.api = ApiProvider.getInstance();
  }

  getProducts({
    page,
    size,
    categoryId,
    keyword,
    warehouseId,
  }: GetProductsTypes): Promise<AxiosResponse<Products>> {
    const pageParam = page ? `?page=${page}` : '';
    const sizeParam = size ? `&size=${size}` : '';
    const categoryIdParam = categoryId ? `&categoryId=${categoryId}` : '';
    const keywordParam = keyword ? `&keyword=${keyword}` : '';
    const warehouseIdParam = warehouseId ? `&warehouseId=${warehouseId}` : '';
    return this.api.get(
      `/suppliers/products${pageParam}${sizeParam}${categoryIdParam}${keywordParam}${warehouseIdParam}`,
    );
  }

  getCategories(): Promise<AxiosResponse<Categories>> {
    return this.api.get(`/suppliers/categories`);
  }

  getWarehouses(): Promise<AxiosResponse<Categories>> {
    return this.api.get(`/suppliers/warehouses`);
  }

  verify(data: VerifyProps): Promise<AxiosResponse<VerifyResponseSuccess>> {
    return this.api.post(`/suppliers/inventory/verify`, data);
  }

  massiveSave(
    data: MassiveSaveProps,
  ): Promise<AxiosResponse<MassiveSaveResponseSuccess>> {
    return this.api.post(`/suppliers/inventory/massive-save`, data);
  }
}
