/* eslint-disable @typescript-eslint/no-explicit-any */
import {useMutation, useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useState, useEffect, useMemo} from 'react';

import {useErrorHandler} from 'hooks';
import {OrderServices} from 'services/orders/orders.services';

import {initialState, ORDERS_ACTIONS, reducer} from './reducer';
import {
  UseOrders,
  OrdersResponse,
  ActionOrders,
  TypePropsUseOrders,
  Status,
} from './types';

const orderServices = new OrderServices();

export const useOrders = ({
  page = 1,
  size = 8,
  statusId = 1,
  dateFrom,
  dateTo,
}: TypePropsUseOrders): UseOrders => {
  const [result, dispatchRetrieve] = useReducer<
    React.Reducer<OrdersResponse, ActionOrders>
  >(logger(reducer), initialState);

  const {
    refetch: refetchRetrieve,
    isError: isErrorRetrieve,
    isSuccess: isSuccessRetrieve,
    isLoading: isLoadingRetrieve,
    data: responseRetrieve,
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
    dispatchRetrieve({type: ORDERS_ACTIONS.LIST, payload: responseRetrieve});
  }, [responseRetrieve]);

  const {
    error: isErrorSetState,
    isLoading: isLoadingSetState,
    mutateAsync: mutateSetState,
  } = useMutation((status: Status) => orderServices.setStateOrders(status));

  useErrorHandler(isErrorRetrieve, {action: 'read', entity: 'product'});

  return {
    isErrorRetrieve,
    isLoadingRetrieve,
    isSuccessRetrieve,
    dataRetrieve: (result as OrdersResponse) || {pagination: {}, items: []},
    dispatchRetrieve,
    refetchRetrieve,
    isErrorSetState,
    isLoadingSetState,
    mutateSetState,
  };
};
