import {reducer, initialState, COMMONDOCUMENTTYPES_ACTIONS} from './reducer';

describe('useOrders reducer', () => {
  it('#1. Should list orders', () => {
    expect(
      reducer(initialState, {
        type: COMMONDOCUMENTTYPES_ACTIONS.LIST,
        payload: [],
      }),
    ).toMatchObject([]);
  });
});
