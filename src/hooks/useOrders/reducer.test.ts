import {Order} from 'services/models';
import {orders} from '../../modules/Dashboard/Orders/Orders.mock';

import {OrdersResponse} from './types';
import {reducer, initialState, ORDERS_ACTIONS} from './reducer';

const firstOrder = orders[0] as Order;

describe('useOrders reducer', () => {
  it('Should add a product', () => {
    expect(
      reducer(initialState, {
        type: ORDERS_ACTIONS.LIST,
        payload: {
          pagination: {
            pagesNumber: 1,
            itemsNumber: 1,
            itemsByPage: 1,
            items: firstOrder,
          },
        } as OrdersResponse,
      }),
    ).toMatchObject({
      ...initialState,
      orders: [firstOrder],
    });
  });
});
