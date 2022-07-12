/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useEffect} from 'react';

import {useErrorHandler} from 'hooks';
import {SuppliersProductsServices} from 'services/suppliers.products/suppliers.products.services';
import {initialState, WAREHOUSES_ACTIONS, reducer} from './reducer';
import {
  ActionWarehouses,
  WarehousesReducerResponse,
  UseSuppliersWarehouses,
} from './types';

const warehouseservices = new SuppliersProductsServices();

export const useSuppliersWarehouses = (): UseSuppliersWarehouses => {
  const [result, dispatch] = useReducer<
    React.Reducer<WarehousesReducerResponse, ActionWarehouses>
  >(logger(reducer), initialState);

  const {
    refetch: refetchWarehouses,
    isError: isErrorWarehouses,
    isSuccess: isSuccessWarehouses,
    isLoading: isLoadingWarehouses,
    data: dataProduct,
  } = useQuery(['warehouses'], async () => {
    const {data} = await warehouseservices.getWarehouses();
    return data;
  });

  useEffect(() => {
    dispatch({type: WAREHOUSES_ACTIONS.LIST, payload: dataProduct});
  }, [dataProduct]);

  useErrorHandler(isErrorWarehouses, {action: 'read', entity: 'product'});

  return {
    refetchWarehouses,
    isErrorWarehouses,
    isSuccessWarehouses,
    isLoadingWarehouses,
    dataWarehouses: result || [],
    dispatch,
  };
};
