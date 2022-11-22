import {useQuery} from 'react-query';

import logger from 'use-reducer-logger';
import {useReducer, useEffect} from 'react';

import {useErrorHandler} from 'hooks';
import {OrderServices} from 'services/suppliers.orders/suppliers.orders.services';

import {initialState, BATCH_ACTIONS, reducer} from './reducer';

const orderServices = new OrderServices();

import {UseDownloadOrdersResponse} from './types';

export const useDownloadOrders = (date: string): UseDownloadOrdersResponse => {
  const [result, dispatchRetrieve] = useReducer(logger(reducer), initialState);

  const {
    refetch: refetchRetrieve,
    isError: isErrorRetrieve,
    isSuccess: isSuccessRetrieve,
    isLoading: isLoadingRetrieve,
    data: responseRetrieve,
  } = useQuery(['batches'], async () => {
    const {data} = await orderServices.getOrdersByDay(date);
    return data;
  });

  useEffect(() => {
    dispatchRetrieve({type: BATCH_ACTIONS.LIST, payload: responseRetrieve});
  }, [responseRetrieve]);

  useErrorHandler(isErrorRetrieve, {action: 'read', entity: 'product'});

  return {
    isErrorRetrieve,
    isLoadingRetrieve,
    isSuccessRetrieve,
    dataRetrieve: result || {items: []},
    dispatchRetrieve,
    refetchRetrieve,
  };
};
