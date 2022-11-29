/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  RefetchOptions,
  QueryObserverResult,
  RefetchQueryFilters,
} from 'react-query';
import {AxiosResponse} from 'axios';

export interface UseDownloadOrdersResponse {
  isErrorRetrieve: boolean;
  isLoadingRetrieve: boolean;
  isSuccessRetrieve: boolean;
  dataRetrieve: DeliversResponse;
  dispatchRetrieve: (value: ActionOrders) => void;
  refetchRetrieve: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<unknown, unknown>>;
  getUseOrdersDownloadByDate: UseOrdersDownloadByDate;
}

export interface DeliversResponse {
  items?: DeliverBatch[];
}

export interface DeliverBatch {
  warehouseId: string;
  name: string;
  supplierId: string;
  batches: BatchItem[] | [];
}

export interface BatchItem {
  date: string;
  hour: string;
  isEnable: boolean;
}

export interface ActionOrders {
  type: string;
  payload?: any;
}

export type UseOrdersDownloadByDate = (
  warehouseId: string,
  supplierId: string,
  batchHour: string,
  batchDate: string,
) => Promise<AxiosResponse>;
