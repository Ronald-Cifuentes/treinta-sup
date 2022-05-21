import axios from 'axios';

import {renderHook} from '__tests__/test-utils';

import {useInitConfigs} from './useInitConfigs';

const spyInit = jest.fn();
const useFn = jest.fn().mockReturnValue({init: spyInit});

jest.mock('axios-retry', () => jest.fn());
jest.mock('i18next', () => ({
  use: jest.fn().mockImplementation(() => ({init: spyInit, use: useFn})),
  changeLanguage: jest.fn(),
}));
jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      getIdToken: jest.fn().mockResolvedValue('token'),
    },
  }),
}));

describe('useInitConfigs', () => {
  it('should init i18n provider', () => {
    const {result} = renderHook(() => useInitConfigs());
    result.current.init();
    expect(spyInit).toBeCalled();
  });

  it('should init api provider', () => {
    const instanceMock = {
      get: 'getInstance',
      interceptors: {response: {use: jest.fn()}},
    };
    const spyCreate = jest.fn().mockReturnValue(instanceMock);
    jest.spyOn(axios, 'create').mockImplementation(spyCreate);
    const {result} = renderHook(() => useInitConfigs());
    result.current.init();

    expect(spyCreate).toBeCalled();
  });
});
