/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useEffect} from 'react';

import {useErrorHandler} from 'hooks';
import {CommonDocumentTypesServices} from 'services/common.documenttypes/common.documenttypes.services';

import {initialState, COMMONDOCUMENTTYPES_ACTIONS, reducer} from './reducer';
import {
  ActionCommonDocumentTypes,
  OptionsType,
  UseCommonDocumentTypes,
} from './types';

const commonDocumentTypes = new CommonDocumentTypesServices();

export const useCommonDocumentTypes = (): UseCommonDocumentTypes => {
  const [result, dispatch] = useReducer<
    React.Reducer<OptionsType[], ActionCommonDocumentTypes>
  >(logger(reducer), initialState);

  const {
    refetch: refetchDocumentType,
    isError: isErrorDocumentType,
    isSuccess: isSuccessDocumentType,
    isLoading: isLoadingDocumentType,
    data: dataDocumentType,
  } = useQuery(['documenttype'], async () => {
    const {data} = await commonDocumentTypes.getDocumentType();
    return data.map((item, ind) => ({
      label: item.name,
      value: `${ind}`,
    }));
  });

  useEffect(() => {
    dispatch({
      type: COMMONDOCUMENTTYPES_ACTIONS.LIST,
      payload: dataDocumentType,
    });
  }, [dataDocumentType]);

  useErrorHandler(isErrorDocumentType, {action: 'read', entity: 'product'});

  return {
    refetchDocumentType,
    isErrorDocumentType,
    isSuccessDocumentType,
    isLoadingDocumentType,
    dataDocumentType: result,
    dispatch,
  };
};
