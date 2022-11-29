import {Reducer} from 'react';
import {ActionOrders, DeliversResponse} from './types';

export const initialState: DeliversResponse = {
  items: [],
};

export const BATCH_ACTIONS = {
  LIST: 'batches/list',
};

export const reducer: Reducer<DeliversResponse, ActionOrders> = (
  state,
  {type, payload},
): DeliversResponse => {
  if (type === BATCH_ACTIONS.LIST) {
    return {...state, items: payload || []};
  }
  return state;
};
