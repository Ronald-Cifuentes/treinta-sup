import {AxiosResponse} from 'axios';

import {DataDetailTypes} from 'services/models';
import {ApiProvider} from 'providers/api-provider';
import {GetDetailTypes, SetDetailTypes} from './types';

export class DetailServices {
  private api: ApiProvider;
  constructor() {
    this.api = ApiProvider.getInstance();
  }

  getDetail({id}: GetDetailTypes): Promise<AxiosResponse<DataDetailTypes[]>> {
    const idParam = id ? `/${id}` : '';
    return this.api.get<DataDetailTypes[]>(`/suppliers/orders${idParam}`);
  }

  setDetail({
    id,
    data,
  }: SetDetailTypes): Promise<AxiosResponse<DataDetailTypes[]>> {
    const idParam = id ? `/${id}` : '';
    return this.api.patch(`/suppliers/orders${idParam}`, data);
  }
}
