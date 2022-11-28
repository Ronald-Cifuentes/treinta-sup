import {reducer, initialState, BATCH_ACTIONS} from './reducer';

describe('useDownloadOrders reducer', () => {
  it('1. should return the initial state', () => {
    expect(
      reducer(initialState, {
        type: BATCH_ACTIONS.LIST,
      }),
    ).toEqual({items: []});
  });

  it('2. should handle GET_BATCH_DOWNLOAD_ORDERS', () => {
    const startAction = {
      type: BATCH_ACTIONS.LIST,
    };
    expect(reducer({}, startAction)).toEqual({items: []});
  });
});
