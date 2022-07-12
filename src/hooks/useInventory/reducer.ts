import {Reducer} from 'react';
import {ActionProducts, StateProductsTypes} from './types';

export const initialState: StateProductsTypes = {
  items: [],
  pagination: {
    pagesNumber: 1,
    itemsNumber: 1,
    itemsByPage: 1,
  },
};

export const PRODUCTS_ACTIONS = {
  LIST: 'Products/list',
};

export const reducer: Reducer<StateProductsTypes, ActionProducts> = (
  state,
  {type, payload},
): StateProductsTypes => {
  switch (type) {
    case PRODUCTS_ACTIONS.LIST:
      return {...state, ...payload};
    default:
      break;
  }
  return state;
};
