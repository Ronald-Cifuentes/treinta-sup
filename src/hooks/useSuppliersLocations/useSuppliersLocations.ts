/* eslint-disable @typescript-eslint/no-explicit-any */
import {useQuery} from 'react-query';
import logger from 'use-reducer-logger';
import {useReducer, useEffect} from 'react';

import {useErrorHandler} from 'hooks';
import {SuppliersLocationsServices} from 'services/suppliers.locations/suppliers.locations.services';

import {OptionsType} from 'hooks/useCommonDocumentTypes';
import {UseSuppliersLocations, ActionSuppliersLocations} from './types';
import {initialState, SUPPLIERS_LOCATIONS_ACTIONS, reducer} from './reducer';

const suppliersLocationsServices = new SuppliersLocationsServices();

export const useSuppliersLocations = (): UseSuppliersLocations => {
  const [result, dispatch] = useReducer<
    React.Reducer<OptionsType[], ActionSuppliersLocations>
  >(logger(reducer), initialState);

  const {
    refetch: refetchLocation,
    isError: isErrorLocation,
    isSuccess: isSuccessLocation,
    isLoading: isLoadingLocation,
    data: dataLocation,
  } = useQuery(['location'], async () => {
    const {data} = await suppliersLocationsServices.getLocation();
    return (
      data.items?.map(item => ({
        id: item.locationId,
        label: item.name,
        value: item.name,
      })) || [{label: '', value: ''}]
    );
  });

  useEffect(() => {
    dispatch({type: SUPPLIERS_LOCATIONS_ACTIONS.LIST, payload: dataLocation});
  }, [dataLocation]);

  useErrorHandler(isErrorLocation, {action: 'read', entity: 'product'});

  return {
    refetchLocation,
    isErrorLocation,
    isSuccessLocation,
    isLoadingLocation,
    dataLocation: result || [{label: '', value: ''}],
    dispatch,
  };
};
