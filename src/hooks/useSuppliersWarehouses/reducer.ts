import {Reducer} from 'react';
import {ActionWarehouses, StateWarehousesTypes} from './types';

export const initialState: StateWarehousesTypes = {
  items: [],
};

export const WAREHOUSES_ACTIONS = {
  LIST: 'Warehouses/list',
};

export const reducer: Reducer<StateWarehousesTypes, ActionWarehouses> = (
  state,
  {type, payload},
): StateWarehousesTypes => {
  switch (type) {
    case WAREHOUSES_ACTIONS.LIST:
      return {...state, ...payload};
    default:
      break;
  }
  return state;
};
