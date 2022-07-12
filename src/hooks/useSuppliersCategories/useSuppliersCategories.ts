/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useEffect} from 'react';

import {useErrorHandler} from 'hooks';
import {SuppliersProductsServices} from 'services/suppliers.products/suppliers.products.services';
import {initialState, CATEGORIES_ACTIONS, reducer} from './reducer';
import {
  ActionCategories,
  CategoriesReducerResponse,
  UseSuppliersCategories,
} from './types';

const categorieservices = new SuppliersProductsServices();

export const useSuppliersCategories = (): UseSuppliersCategories => {
  const [result, dispatch] = useReducer<
    React.Reducer<CategoriesReducerResponse, ActionCategories>
  >(logger(reducer), initialState);

  const {
    refetch: refetchCategories,
    isError: isErrorCategories,
    isSuccess: isSuccessCategories,
    isLoading: isLoadingCategories,
    data: dataProduct,
  } = useQuery(['categories'], async () => {
    const {data} = await categorieservices.getCategories();
    return data;
  });

  useEffect(() => {
    dispatch({type: CATEGORIES_ACTIONS.LIST, payload: dataProduct});
  }, [dataProduct]);

  useErrorHandler(isErrorCategories, {action: 'read', entity: 'product'});

  return {
    refetchCategories,
    isErrorCategories,
    isSuccessCategories,
    isLoadingCategories,
    dataCategories: result || [],
    dispatch,
  };
};
