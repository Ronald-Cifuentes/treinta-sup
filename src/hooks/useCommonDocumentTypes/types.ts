/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';

export interface OptionsType {
  label?: string;
  value?: string;
}

export interface ActionCommonDocumentTypes {
  type: string;
  payload?: object;
}

export interface UseCommonDocumentTypes {
  refetchDocumentType: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
  ) => Promise<
    QueryObserverResult<
      {
        label: string;
        value: string;
      }[],
      unknown
    >
  >;
  isErrorDocumentType: boolean;
  isSuccessDocumentType: boolean;
  isLoadingDocumentType: boolean;
  dataDocumentType: OptionsType[];
  dispatch: (value: ActionCommonDocumentTypes) => void;
}
