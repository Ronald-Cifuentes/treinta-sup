import {Reducer} from 'react';

import {Order} from 'services/models';
import {ActionOrders, OrdersResponse} from './types';

export const initialState: OrdersResponse = {
  pagination: {
    pagesNumber: 1,
    itemsNumber: 1,
    itemsByPage: 1,
  },
  items: [],
};

export const ORDERS_ACTIONS = {
  LIST: 'orders/list',
};

export const reducer = (state, {type, payload}) => {
  switch (type) {
    case ORDERS_ACTIONS.LIST:
      return {...state, ...payload};
    default:
      break;
  }
  return state;
};
