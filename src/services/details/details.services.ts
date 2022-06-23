import {AxiosResponse} from 'axios';

import {Detail} from 'services/models';
import {ApiProvider} from 'providers/api-provider';
import {PropTypesGetDetails} from './types';

export class DetailServices {
  private api: ApiProvider;
  constructor() {
    this.api = ApiProvider.getInstance();
  }

  getDetails({id}: PropTypesGetDetails): Promise<AxiosResponse<Detail[]>> {
    const idParam = id ? `/${id}` : '';
    return this.api.get<Detail[]>(`/suppliers/orders${idParam}`);
  }
}
