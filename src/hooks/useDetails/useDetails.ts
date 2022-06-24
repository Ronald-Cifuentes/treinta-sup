/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useEffect} from 'react';

import {useErrorHandler} from 'hooks';
import {DetailServices} from 'services/details/details.services';
import {Detail} from 'services/models';

import {initialState, DETAILS_ACTIONS, reducer} from './reducer';
import {
  UseDetails,
  ActionDetails,
  TypePropsUseDetails,
  DataProduct,
} from './types';

const detailServices = new DetailServices();

export const useDetails = ({id}: TypePropsUseDetails): UseDetails => {
  const [result, dispatch] = useReducer<React.Reducer<Detail, ActionDetails>>(
    logger(reducer),
    initialState,
  );

  const FormattedData: DataProduct[] = result.products.map(item => ({
    id: item.id,
    name: item.name,
    sku: item.sku,
    quantityOrdered: item.initialQuantity,
    quantityToDispatch: item.quantity,
    initialPrice: item.discountValue,
    discount: item.baseValue,
    totalPrice: item.discountValue * item.quantity,
    image: item.thumbImgUrl,
  }));

  const {
    refetch: refetchDetail,
    isError: isErrorDetail,
    isSuccess: isSuccessDetail,
    isLoading: isLoadingDetail,
    data: dataDetail,
  } = useQuery(['details'], async () => {
    const {data} = await detailServices.getDetails({id});
    return data;
  });

  useEffect(() => {
    dispatch({type: DETAILS_ACTIONS.LIST, payload: dataDetail});
  }, [dataDetail]);

  useErrorHandler(isErrorDetail, {action: 'read', entity: 'product'});

  return {
    refetchDetail,
    isErrorDetail,
    isSuccessDetail,
    isLoadingDetail,
    dataProduct: FormattedData || [],
    dataDetail: result || [],
    dispatch,
  };
};
