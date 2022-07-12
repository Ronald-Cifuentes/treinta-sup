import {AxiosResponse} from 'axios';
import {ApiProvider} from 'providers/api-provider';
import {ProductDetails} from 'services/models/Product.Detail';
import {GetProductIdProps} from './types';

export class SuppliersProductDetailServices {
  private api: ApiProvider;
  constructor() {
    this.api = ApiProvider.getInstance();
  }

  getProductDetail({
    id,
  }: GetProductIdProps): Promise<AxiosResponse<ProductDetails>> {
    return this.api.get(`/suppliers/products/${id}`);
  }
}
