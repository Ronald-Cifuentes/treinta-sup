import {OptionsType} from 'hooks/useCommonDocumentTypes';
import {Reducer} from 'react';
import {ActionSuppliersLocations} from './types';

export const initialState: OptionsType[] = [{label: '', value: ''}];

export const SUPPLIERS_LOCATIONS_ACTIONS = {
  LIST: 'SuppliersLocations/list',
};

export const reducer: Reducer<OptionsType[], ActionSuppliersLocations> = (
  state,
  {type, payload},
): OptionsType[] => {
  switch (type) {
    case SUPPLIERS_LOCATIONS_ACTIONS.LIST:
      return payload != undefined ? [...Object.assign(payload)] : state;
    default:
      break;
  }
  return state;
};
