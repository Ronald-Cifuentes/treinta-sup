/* eslint-disable @typescript-eslint/no-explicit-any */
//import {AxiosResponse} from 'axios';
import {
  RefetchOptions,
  QueryObserverResult,
  RefetchQueryFilters,
  //UseMutateAsyncFunction,
} from 'react-query';

export interface UseDownloadOrdersResponse {
  isErrorRetrieve: boolean;
  isLoadingRetrieve: boolean;
  isSuccessRetrieve: boolean;
  dataRetrieve: DeliversResponse;
  dispatchRetrieve: (value: ActionOrders) => void;
  refetchRetrieve: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<unknown, unknown>>;
}

export interface DeliversResponse {
  //items?: any;
  items?: DeliverBatch[];
}

export interface DeliverBatch {
  id?: string;
  name?: string;
  supplierId?: string;
  // Todo - Change type
  batches?: BatchItem | undefined | any;
}

export interface BatchItem {
  hour?: string;
  isEnable?: boolean;
}

export interface ActionOrders {
  type: string;
  payload?: any;
}
