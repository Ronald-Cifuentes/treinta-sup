/* eslint-disable @typescript-eslint/ban-types */
import {snakeCaseKeys} from 'utils/changeCaseObjectKeys';
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import {ApiConfig} from './api-config';

export class ApiProvider {
  private static instance: ApiProvider;
  private apiInstance!: AxiosInstance;

  static getInstance(): ApiProvider {
    if (!ApiProvider.instance) {
      ApiProvider.instance = new ApiProvider();
    }
    return this.instance;
  }

  initProvider(config: AxiosRequestConfig = {}): void {
    this.apiInstance = ApiConfig.create(config);
  }

  async get<T = unknown>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return await this.apiInstance.get(url, {
      headers: await ApiConfig.addHeaders(url),
      ...config,
    });
  }

  async post<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<AxiosResponse<T>> {
    return await this.apiInstance.post(url, data, {
      headers: await ApiConfig.addHeaders(url),
    });
  }

  async postAndSerialize<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<AxiosResponse<T>> {
    const serializedData = snakeCaseKeys(data);
    return await this.apiInstance.post(url, serializedData, {
      headers: await ApiConfig.addHeaders(url),
    });
  }

  async put<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<AxiosResponse<T>> {
    return await this.apiInstance.put(url, data, {
      headers: await ApiConfig.addHeaders(url),
    });
  }

  async putAndSerialize<T = unknown>(
    url: string,
    data: unknown,
  ): Promise<AxiosResponse<T>> {
    const serializedData = snakeCaseKeys(data);
    return await this.apiInstance.put(url, serializedData, {
      headers: await ApiConfig.addHeaders(url),
    });
  }

  async delete<T = unknown>(
    url: string,
    data?: unknown,
  ): Promise<AxiosResponse<T>> {
    return await this.apiInstance.delete(url, {
      data,
      headers: await ApiConfig.addHeaders(url),
    });
  }

  async patch<T = unknown>(
    url: string,
    data?: unknown,
  ): Promise<AxiosResponse<T>> {
    const serializedData = snakeCaseKeys(data);
    return await this.apiInstance.patch(url, data, {
      headers: await ApiConfig.addHeaders(url),
    });
  }
}
