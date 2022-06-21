import {Reducer} from 'react';
import {ActionCommonDocumentTypes, OptionsType} from './types';

export const initialState: OptionsType[] = [{label: '', value: ''}];

export const COMMONDOCUMENTTYPES_ACTIONS = {
  LIST: 'CommonDocumentTypes/list',
};

export const reducer: Reducer<OptionsType[], ActionCommonDocumentTypes> = (
  state,
  {type, payload},
): OptionsType[] => {
  switch (type) {
    case COMMONDOCUMENTTYPES_ACTIONS.LIST:
      return payload != undefined ? [...Object.assign(payload)] : state;
    default:
      break;
  }
  return state;
};
