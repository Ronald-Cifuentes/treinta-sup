import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';
import axiosRetry from 'axios-retry';
import {signOut} from '@firebase/auth';

import {auth} from 'config/firebase';
import {LogProvider} from 'providers/log-provider';

const publicUrls = [
  'otp/send-code',
  'authentication/signin-otp',
  'authentication/signup-otp',
  'users/phone/validation',
];

export class ApiConfig {
  static create(config: AxiosRequestConfig): AxiosInstance {
    const timeout = Number(
      process.env.REACT_APP_MAX_TIMEOUT || axios.defaults.timeout,
    ) as number;
    const instance = axios.create({
      baseURL: process.env.REACT_APP_B2B_SUPPLIERS_URL,
      timeout,
      ...config,
    });
    this.initInterceptors(instance);
    axiosRetry(instance, {retries: 0});
    return instance;
  }

  static initInterceptors(instance: AxiosInstance): void {
    instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const token = localStorage.getItem('dataRes');
        if (token) {
          response.headers.Authorization = `Bearer ${token}`;
        }
        if (response.status === 401) {
          localStorage.clear();
          sessionStorage.clear();
          signOut(auth);
        } else {
          return response;
        }
      },
      error => {
        LogProvider.getInstance().logError({
          error: error.request.url,
          name: 'API-ERROR',
          message: error.message,
          context: {currentUser: auth?.currentUser || undefined, error},
        });
        throw error;
      },
    );
  }

  static async addHeaders(url: string): Promise<AxiosRequestHeaders> {
    let token = await auth?.currentUser?.getIdToken();

    if (!token && !publicUrls.includes(url)) {
      LogProvider.getInstance().logError({
        name: 'MISSING_TOKEN',
        context: {user: auth?.currentUser},
      });
      token = await auth?.currentUser?.getIdToken(true);
    }

    if (token) {
      return {
        Authorization: `Bearer ${token}`,
        'x-api-key': process.env.REACT_APP_B2B_SERVICE_API_KEY || '',
      };
    } else {
      return {'x-api-key': process.env.REACT_APP_B2B_SERVICE_API_KEY || ''};
    }
  }
}
