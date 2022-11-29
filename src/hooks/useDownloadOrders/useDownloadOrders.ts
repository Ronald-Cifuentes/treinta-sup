import {format, parse} from 'date-fns';
import {useErrorHandler} from 'hooks';
import {useEffect, useReducer} from 'react';
import {useQuery} from 'react-query';
import {OrderServices} from 'services/suppliers.orders/suppliers.orders.services';
import logger from 'use-reducer-logger';
import {BATCH_ACTIONS, initialState, reducer} from './reducer';
import {UseDownloadOrdersResponse, UseOrdersDownloadByDate} from './types';

const orderServices = new OrderServices();

export const useDownloadOrders = (date: string): UseDownloadOrdersResponse => {
  const [result, dispatchRetrieve] = useReducer(logger(reducer), initialState);

  /* Action getOrdersByDay */
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
  /* Action getOrdersByDay */

  /* Action GetDownloadBatchsbyDay */

  const getUseOrdersDownloadByDate: UseOrdersDownloadByDate = async (
    warehouseId,
    supplierId,
    batchHour,
    batchDate,
    // eslint-disable-next-line max-params
  ) => {
    //
    const parseDate = parse(
      `${batchDate} ${batchHour}`,
      'yyyy-MM-dd hh:mm aa',
      new Date(),
    );
    const {data} = await orderServices.getDownloadBatchsByDay(
      warehouseId,
      supplierId,
      format(parseDate, 'k:mm'),
      batchDate,
    );
    return data;
  };

  /* Action GetDownloadBatchsbyDay */

  useErrorHandler(isErrorRetrieve, {action: 'read', entity: 'product'});

  return {
    isErrorRetrieve,
    isLoadingRetrieve,
    isSuccessRetrieve,
    dataRetrieve: result,
    dispatchRetrieve,
    refetchRetrieve,
    getUseOrdersDownloadByDate,
  };
};
