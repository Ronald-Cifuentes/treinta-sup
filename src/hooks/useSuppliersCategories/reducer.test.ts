import {items} from 'modules/Dashboard/Orders/components/organisms/OrderList/OrderList.mock';
import {reducer, initialState, CATEGORIES_ACTIONS} from './reducer';

describe('useOrders reducer', () => {
  it('#1. Should list orders', () => {
    expect(
      reducer(initialState, {
        type: CATEGORIES_ACTIONS.LIST,
        payload: {
          pagination: {
            pagesNumber: 1,
            itemsNumber: 1,
            itemsByPage: 1,
          },
          items,
        },
      }),
    ).toMatchObject({
      pagination: {
        pagesNumber: 1,
        itemsNumber: 1,
        itemsByPage: 1,
      },
      items,
    });
  });
});
