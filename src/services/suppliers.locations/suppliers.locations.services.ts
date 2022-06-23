import {AxiosResponse} from 'axios';
import {ApiProvider} from 'providers/api-provider';
import {Locations} from 'services/models/Suppliers';

export class SuppliersLocationsServices {
  private api: ApiProvider;
  constructor() {
    this.api = ApiProvider.getInstance();
  }

  getLocation(): Promise<AxiosResponse<Locations>> {
    return this.api.get(`/suppliers/locations`);
  }
}
