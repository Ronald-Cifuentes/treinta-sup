import {Reducer} from 'react';
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

export const reducer: Reducer<OrdersResponse, ActionOrders> = (
  state,
  {type, payload},
): OrdersResponse => {
  switch (type) {
    case ORDERS_ACTIONS.LIST:
      return {...state, ...payload};
    default:
      break;
  }
  return state;
};
