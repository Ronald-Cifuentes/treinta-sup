/* eslint-disable @typescript-eslint/no-explicit-any */
import {ApiConfig} from './api-config';
import {ApiProvider} from './api-provider';

jest.mock('firebase/auth', () => ({
  getAuth: (): any => ({
    currentUser: {
      getIdToken: jest.fn().mockResolvedValue('token'),
    },
  }),
  initializeApp: jest.fn(),
}));

describe('api provider', () => {
  const spyGet = jest.fn();
  const spyPost = jest.fn();
  const spyPut = jest.fn();
  const spyDelete = jest.fn();
  const mockConfig = {
    url: 'http://test.com',
  };
  const mockHeaders = {
    Authorization: 'Bearer',
  };
  const provider = ApiProvider.getInstance();

  beforeAll(() => {
    const spy: any = jest.fn(() => ({
      get: spyGet,
      post: spyPost,
      put: spyPut,
      delete: spyDelete,
    }));
    jest.spyOn(ApiConfig, 'create').mockImplementation(spy);
    jest.spyOn(ApiConfig, 'addHeaders').mockResolvedValue(mockHeaders);
    provider.initProvider(mockConfig);
  });

  it('should call get method', async () => {
    await provider.get(mockConfig.url);

    expect(spyGet).toBeCalledWith(mockConfig.url, {headers: mockHeaders});
  });

  it('should call post method', async () => {
    await provider.post(mockConfig.url, {test: 'test'});

    expect(spyPost).toBeCalledWith(
      mockConfig.url,
      {test: 'test'},
      {headers: mockHeaders},
    );
  });

  it('should call put method', async () => {
    await provider.put(mockConfig.url, {test: 'test'});

    expect(spyPut).toBeCalledWith(
      mockConfig.url,
      {test: 'test'},
      {headers: mockHeaders},
    );
  });

  it('should call delete method', async () => {
    await provider.delete(mockConfig.url, {test: 'test'});

    expect(spyDelete).toBeCalledWith(mockConfig.url, {
      data: {test: 'test'},
      headers: mockHeaders,
    });
  });
});
