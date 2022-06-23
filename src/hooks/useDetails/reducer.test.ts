import {items} from '../../modules/Dashboard/Orders/Orders.mock';
import {reducer, initialState, DETAILS_ACTIONS} from './reducer';

describe('useOrders reducer', () => {
  it('#1. Should list orders', () => {
    expect(
      reducer(initialState, {
        type: DETAILS_ACTIONS.LIST,
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
