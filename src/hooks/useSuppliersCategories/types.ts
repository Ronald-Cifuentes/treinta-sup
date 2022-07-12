/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import {Categories} from 'services/models';
import {Actions} from 'hooks/types';

export interface UseSuppliersCategories {
  refetchCategories: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<QueryObserverResult<Categories, unknown>>;
  isErrorCategories: boolean;
  isLoadingCategories: boolean;
  isSuccessCategories: boolean;
  dataCategories: Categories;
  dispatch: (value: ActionCategories) => void;
}

export interface CategoriesReducerResponse extends Categories {}
export interface StateCategoriesTypes extends Categories {}
export interface ActionCategories extends Actions {}
