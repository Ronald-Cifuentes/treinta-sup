import Axios, {AxiosInstance} from 'axios';

import {ApiConfig} from './api-config';

jest.mock('axios-retry', () => jest.fn());
jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      getIdToken: jest.fn().mockResolvedValue('token'),
    },
  }),
  initializeApp: jest.fn(),
}));

describe('Api config', () => {
  it('should create axios instance', () => {
    const spy = jest.fn(
      () =>
        ({
          interceptors: {response: {use: jest.fn()}},
        } as unknown as AxiosInstance),
    );
    jest.spyOn(Axios, 'create').mockImplementation(spy);
    ApiConfig.create({url: 'test'});
    expect(spy).toBeCalledWith({url: 'test', timeout: 0, baseURL: undefined});
  });

  it('should add headers to request', async () => {
    const headers = await ApiConfig.addHeaders('test');

    expect(headers).toEqual({
      Authorization: 'Bearer token',
      'x-api-key': '',
    });
  });
});
