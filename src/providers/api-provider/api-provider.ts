/* eslint-disable @typescript-eslint/ban-types */
import {snakeCaseKeys} from 'utils/changeCaseObjectKeys';
import {AxiosRequestConfig, AxiosResponse} from 'axios';

import {addHeaders, AxiosInstance} from 'config/AxiosInterceptors';

export class ApiProvider {
  private static instance: ApiProvider;

  static getInstance(): ApiProvider {
    if (!ApiProvider.instance) {
      ApiProvider.instance = new ApiProvider();
    }
    return this.instance;
  }

  async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return await AxiosInstance.get(url, {
      headers: await addHeaders(url),
      ...config,
    });
  }

  async post<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<AxiosResponse<T>> {
    return await AxiosInstance.post(url, data, {
      headers: await addHeaders(url),
    });
  }

  async postAndSerialize<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<AxiosResponse<T>> {
    const serializedData = snakeCaseKeys(data);
    return await AxiosInstance.post(url, serializedData, {
      headers: await addHeaders(url),
    });
  }

  async put<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<AxiosResponse<T>> {
    return await AxiosInstance.put(url, data, {
      headers: await addHeaders(url),
    });
  }

  async putAndSerialize<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<AxiosResponse<T>> {
    const serializedData = snakeCaseKeys(data);
    return await AxiosInstance.put(url, serializedData, {
      headers: await addHeaders(url),
    });
  }

  async delete<T = unknown>(
    url: string,
    data?: unknown,
  ): Promise<AxiosResponse<T>> {
    return await AxiosInstance.delete(url, {
      data,
      headers: await addHeaders(url),
    });
  }

  async patch<T = unknown>(
    url: string,
    data?: unknown,
  ): Promise<AxiosResponse<T>> {
    return await AxiosInstance.patch(url, data, {
      headers: await addHeaders(url),
    });
  }
}
