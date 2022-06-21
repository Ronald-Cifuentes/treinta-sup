import {reducer, initialState, SUPPLIERS_LOCATIONS_ACTIONS} from './reducer';

describe('useSuppliersLocations reducer', () => {
  it('#1. Should list SuppliersLocations', () => {
    expect(
      reducer(initialState, {
        type: SUPPLIERS_LOCATIONS_ACTIONS.LIST,
        payload: [],
      }),
    ).toMatchObject([]);
  });
});
