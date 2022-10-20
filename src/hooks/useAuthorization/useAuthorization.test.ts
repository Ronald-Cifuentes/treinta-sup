import {customRenderHook} from '__tests__/test-utils';

import {Permissions} from 'config/constants';

import {useAuthorization} from './useAuthorization';

const mockedUserTypeId = 1;

jest.mock('context/AuthContext', () => ({
  useAuth: jest
    .fn()
    .mockImplementation(() => ({user: {userTypeId: mockedUserTypeId}})),
}));

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('useAuthorization', () => {
  it('Should permission loaded', () => {
    const {result} = customRenderHook(() =>
      useAuthorization(Permissions.ORDERS_ALL),
    );

    expect(result.current).toBe(true);
  });
  describe('Should super has permission', () => {
    it('orders all', () => {
      const {result} = customRenderHook(() =>
        useAuthorization(Permissions.ORDERS_ALL),
      );

      expect(result.current).toBe(true);
    });
    it('inventory all', () => {
      const {result} = customRenderHook(() =>
        useAuthorization(Permissions.INVENTORY_ALL),
      );

      expect(result.current).toBe(true);
    });
  });
});
