/* eslint-disable no-console */

import {renderHook} from '@testing-library/react-hooks';
import {format} from 'date-fns';
import {OrderServices} from 'services/suppliers.orders/suppliers.orders.services';
import {useQuery} from 'react-query';
import {useDownloadOrders} from './useDownloadOrders';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

jest.mock('services/suppliers.orders/suppliers.orders.services', () => ({
  OrderServices: jest.fn().mockImplementation(() => ({
    getDownloadBatchsByDay: param => param,
    getOrdersByDay: () => ({data: 'albert'}),
  })),
}));

jest.mock('react-query');
const useQueryMock = useQuery as jest.Mock;

describe('useDownloadOrders', () => {
  test('#1', async () => {
    const date = '2022-11-24';
    const selectDateRequest = format(new Date(date) as Date, 'yyyy-MM-dd');

    useQueryMock.mockImplementation(() => ({
      data: 'albert2',
    }));
    const {result} = renderHook(() => useDownloadOrders(selectDateRequest));
    expect(OrderServices).toHaveBeenCalledTimes(1);
    const res = await result.current.getUseOrdersDownloadByDate(
      '',
      '',
      '09:00 AM',
      '2022-10-11',
    );
    expect(res).toBeUndefined();
  });

  test('#2', () => {
    const date = '2022-11-24';
    const selectDateRequest = format(new Date(date) as Date, 'yyyy-MM-dd');
    useQueryMock.mockImplementation((_, cb) => {
      cb();
      return {
        data: 'albert2',
        isLoading: false,
        error: {},
        refetch: jest.fn(),
      };
    });

    const {result} = renderHook(() => useDownloadOrders(selectDateRequest));
    expect(OrderServices).toHaveBeenCalledTimes(1);
    expect(result.current.dataRetrieve).toStrictEqual({items: 'albert2'});
  });

  test('#3', () => {
    const date = '2022-11-24';
    const selectDateRequest = format(new Date(date) as Date, 'yyyy-MM-dd');
    useQueryMock.mockImplementation((_, cb) => {
      cb();
      return {
        data: undefined,
        isLoading: false,
        error: {},
        refetch: jest.fn(),
      };
    });

    const {result} = renderHook(() => useDownloadOrders(selectDateRequest));
    expect(OrderServices).toHaveBeenCalledTimes(1);
    expect(result.current.dataRetrieve).toStrictEqual({items: []});
  });
});
