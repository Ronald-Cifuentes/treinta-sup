/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useEffect} from 'react';

import {useErrorHandler} from 'hooks';
import {SuppliersProductDetailServices} from 'services/suppliers.product.detail/suppliers.product.detail.services';
import {initialState, PRODUCTDETAIL_ACTIONS, reducer} from './reducer';
import {
  UseProductDetail,
  ActionProductDetail,
  UseProductDetailTypes,
  ProductDetailReducerResponse,
} from './types';

const productDetailervices = new SuppliersProductDetailServices();

export const useProductDetail = ({
  id = '',
}: UseProductDetailTypes): UseProductDetail => {
  const [result, dispatch] = useReducer<
    React.Reducer<ProductDetailReducerResponse, ActionProductDetail>
  >(logger(reducer), initialState);

  const formattedData = result;
  formattedData.warehouseDetails = result.warehouseDetails.map((item, ind) => ({
    ...item,
    id: ind,
    // discount: discount.is_active ? discount?.value : '',
  }));

  const {
    refetch: refetchProductDetail,
    isError: isErrorProductDetail,
    isSuccess: isSuccessProductDetail,
    isLoading: isLoadingProductDetail,
    data: dataProduct,
  } = useQuery(['productdetail'], async () => {
    const {data} = await productDetailervices.getProductDetail({id});
    return data;
  });

  useEffect(() => {
    dispatch({type: PRODUCTDETAIL_ACTIONS.LIST, payload: dataProduct});
  }, [dataProduct]);

  useErrorHandler(isErrorProductDetail, {action: 'read', entity: 'product'});

  return {
    refetchProductDetail,
    isErrorProductDetail,
    isSuccessProductDetail,
    isLoadingProductDetail,
    dataProductDetail: result || [],
    dispatch,
  };
};
