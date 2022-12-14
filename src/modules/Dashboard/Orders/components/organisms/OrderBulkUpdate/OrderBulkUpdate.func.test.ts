import {requestMassiveSave, setDataMassive} from './OrderBulkUpdate.func';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('services/suppliers.orders/suppliers.orders.services', () => ({
  OrderServices: jest.fn(() => ({
    setMassiveStatusSave: jest.fn(() => ({msg: 'success response'})),
  })),
}));

const mockData = [
  {
    sequenceId: '000000103',
    status: 'CANCELLED',
    typification: 'CA - Otra ciudad',
  },
  {
    sequenceId: '000000104',
    status: 'CANCELLED',
    typification: 'CA - No contacto - Dirección errada',
  },
  {
    sequenceId: '000000105',
    status: 'SHIPPED',
  },
];

describe('OrderBulkUpdate.func.ts', () => {
  test('#1. requestMassiveSave', async () => {
    const res = await requestMassiveSave({arr: []});
    expect(res).toStrictEqual({msg: 'success response'});
  });

  test('#2. requestMassiveSave', async () => {
    const state = {
      responseVerification: {
        success: [],
      },
    };
    const dispatch = jest.fn();
    const ACTIONS = {
      SET_PARAMETERS_LOADING: 'SET_PARAMETERS_LOADING',
    };
    const res = await setDataMassive({state, dispatch, ACTIONS});
    expect(res).toBeUndefined();
  });

  test('#3. requestMassiveSave', async () => {
    const state = {
      responseVerification: {
        success: mockData,
      },
    };
    const dispatch = jest.fn();
    const ACTIONS = {
      SET_PARAMETERS_LOADING: 'SET_PARAMETERS_LOADING',
    };
    const res = await setDataMassive({state, dispatch, ACTIONS});
    expect(res).toBeUndefined();
    expect(dispatch).toHaveBeenCalled();
  });
});
