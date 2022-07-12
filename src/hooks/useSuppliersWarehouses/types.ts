/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {Categories, Warehouses} from 'services/models';
import {Actions} from 'hooks/types';

export interface UseSuppliersWarehouses {
  refetchWarehouses: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<Categories, unknown>>;
  isErrorWarehouses: boolean;
  isLoadingWarehouses: boolean;
  isSuccessWarehouses: boolean;
  dataWarehouses: Warehouses;
  dispatch: (value: ActionWarehouses) => void;
}

export interface WarehousesReducerResponse extends Warehouses {}
export interface StateWarehousesTypes extends Warehouses {}
export interface ActionWarehouses extends Actions {}
