import {renderHook} from '__tests__/test-utils';

import {Permissions} from 'config/constants';

import {useAuthorization} from './useAuthorization';

let mockedUserTypeId = 1;

jest.mock('context/AuthContext', () => ({
  useAuth: jest
    .fn()
    .mockImplementation(() => ({employee: {userTypeId: mockedUserTypeId}})),
}));

describe('useAuthorization', () => {
  it('Should permission loaded', () => {
    const {result} = renderHook(() => useAuthorization(Permissions.ORDERS_ALL));

    expect(result.current).toBe(true);
  });
  describe('Should super has permission', () => {
    it('orders all', () => {
      const {result} = renderHook(() =>
        useAuthorization(Permissions.ORDERS_ALL),
      );

      expect(result.current).toBe(true);
    });
    it('inventory all', () => {
      const {result} = renderHook(() =>
        useAuthorization(Permissions.INVENTORY_ALL),
      );

      expect(result.current).toBe(true);
    });
  });
});
