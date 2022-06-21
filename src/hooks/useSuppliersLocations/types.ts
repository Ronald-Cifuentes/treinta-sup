/* eslint-disable @typescript-eslint/no-explicit-any */

import {OptionsType} from 'hooks/useCommonDocumentTypes';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';

export interface ActionSuppliersLocations {
  type: string;
  payload?: object;
}

export interface UseSuppliersLocations {
  refetchLocation: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<
    QueryObserverResult<
      {
        id: number;
        label: string;
        value: string;
      }[],
      unknown
    >
  >;
  isErrorLocation: boolean;
  isSuccessLocation: boolean;
  isLoadingLocation: boolean;
  dataLocation?: OptionsType[];
  dispatch: (value: ActionSuppliersLocations) => void;
}
