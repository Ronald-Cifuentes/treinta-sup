/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useState, useEffect, useMemo} from 'react';

import {useErrorHandler} from 'hooks';
import {Order} from 'services/models';
import {OrderServices} from 'services/orders/orders.services';

import {initialState, ORDERS_ACTIONS, reducer} from './reducer';
import {UseOrders, OrdersResponse, ActionOrders} from './types';
import {PropTypesDateRage} from 'modules/Dashboard/Orders/components/molecules/FiltersAndReport/types';
const orderServices = new OrderServices();

interface TypePropsUseOrders {
  page: number;
  size: number;
  statusId: number;
  dateFrom: string | Date | undefined;
  dateTo: string | Date | undefined;
}

export const useOrders = ({
  page,
  size,
  statusId,
  dateFrom,
  dateTo,
}: TypePropsUseOrders): UseOrders => {
  const [selectedOrder, setSelectedOrder] = useState<string>('');

  const [result, dispatch] = useReducer<
    React.Reducer<OrdersResponse, ActionOrders>
  >(logger(reducer), initialState);

  const {
    refetch,
    isError,
    isSuccess,
    isLoading,
    data: response,
  } = useQuery(['orders'], async () => {
    const {data} = await orderServices.getOrders({
      page,
      size,
      statusId,
      dateFrom,
      dateTo,
    });
    return data;
  });

  useEffect(() => {
    dispatch({type: ORDERS_ACTIONS.LIST, payload: response});
  }, [response]);

  useErrorHandler(isError, {action: 'read', entity: 'product'});

  const formattedData = useMemo(
    () =>
      (result?.items as Order[]).map(order => ({
        ...order,
        id: order?.id.slice(0, 8) as string,
        status: order?.status,
        customerName: order?.customerName as string,
        phone: (order?.phone as string) || '',
        creationDate: order?.createdAt as string,
        updateDate: order?.updatedAt as string,
        deliveryDate: order?.deliveryDate as string,
        value: (order?.value as number) || 0,
      })) || [],
    [result],
  );

  return {
    isError,
    dispatch,
    isLoading,
    isSuccess,
    selectedOrder,
    setSelectedOrder,
    data: (result as OrdersResponse) || {pagination: {}, items: []},
    refreshOrders: refetch,
  };
};
