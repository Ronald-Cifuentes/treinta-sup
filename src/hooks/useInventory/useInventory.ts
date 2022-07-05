/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useEffect} from 'react';

import {useErrorHandler} from 'hooks';
import {SuppliersProductsServices} from 'services/suppliers.products/suppliers.products.services';
import {initialState, PRODUCTS_ACTIONS, reducer} from './reducer';
import {
  UseProducts,
  ActionProducts,
  UseProductsTypes,
  ProductsReducerResponse,
} from './types';

const productServices = new SuppliersProductsServices();

export const useProducts = ({
  page,
  size,
  categoryId,
  keyword = '',
  warehouseId = '',
}: UseProductsTypes): UseProducts => {
  const [result, dispatch] = useReducer<
    React.Reducer<ProductsReducerResponse, ActionProducts>
  >(logger(reducer), initialState);

  const {
    refetch: refetchProducts,
    isError: isErrorProducts,
    isSuccess: isSuccessProducts,
    isLoading: isLoadingProducts,
    data: dataProduct,
  } = useQuery(['products'], async () => {
    const {data} = await productServices.getProducts({
      page,
      size,
      categoryId,
      keyword,
      warehouseId,
    });
    return data;
  });

  useEffect(() => {
    dispatch({type: PRODUCTS_ACTIONS.LIST, payload: dataProduct});
  }, [dataProduct]);

  useErrorHandler(isErrorProducts, {action: 'read', entity: 'product'});

  return {
    refetchProducts,
    isErrorProducts,
    isSuccessProducts,
    isLoadingProducts,
    dataProducts: result || [],
    dispatch,
  };
};
