import {AxiosResponse} from 'axios';
import {getCountryList} from '@30sas/web-ui-kit-utils';

import {ApiProvider} from 'providers/api-provider';

import {User} from '../models/User';
import {usersSerializer} from './users.serializers';

const networkErrors = ['Network Error', 'NetworkError'];

export class UsersService {
  private api: ApiProvider;
  constructor() {
    this.api = ApiProvider.getInstance();
  }

  async validateUser(uid: string): Promise<string | undefined> {
    try {
      const result = await this.api.get<User>(`/users/info/${uid}`, {
        'axios-retry': {
          retries: 3,
          retryDelay: () => 1000,
          retryCondition: () => true,
        },
      });
      if (!result?.data) {
        return 'sign-up-phone.invalid-account';
      }
    } catch (error) {
      const isBadNetwork =
        !error || networkErrors.includes((error as Error).message);
      return isBadNetwork
        ? 'login.sign-in-network-error'
        : 'login.sign-in-internal-error';
    }
  }

  async getUser(uid: string): Promise<User> {
    const result = await this.api.get<User>(`/users/info/${uid}`);
    if (!result?.data) {
      throw Error('USER NOT FOUND!');
    }
    return result.data;
  }

  async create(user: User): Promise<User> {
    const {data} = await this.api.post<User[]>(
      `/users/create`,
      usersSerializer(user),
    );
    return data[0];
  }

  updateFirstTime(user: User): Promise<AxiosResponse> {
    const userData = usersSerializer(user);
    return this.api.put(`/users/update`, userData);
  }

  async phoneValidation(phone: string, countryCode: string): Promise<boolean> {
    const countryId = this.getCountryIdByCode(countryCode);
    const {data} = await this.api.get<boolean>(
      `/users/phone/validation?phone=${phone}&countryCode=${countryCode}&countryId=${countryId}`,
    );
    return data;
  }

  private getCountryIdByCode(code: string): number {
    const countries = getCountryList();
    return countries.find(country => country.code === code)?.id || 1;
  }
}
