/* eslint-disable no-console */
import {OrderServices} from './suppliers.orders.services';
jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.setTimeout(50000);

jest.mock('providers/api-provider', () => ({
  ApiProvider: {
    getInstance: jest.fn(() => ({
      get: jest.fn(() => ({
        success: true,
      })),
      patch: jest.fn(() => ({
        success: true,
      })),
    })),
  },
}));

const ws = new OrderServices();

describe('OrdersServices Tests', () => {
  it('1. Test Get Orders By Day', async () => {
    // Parametros
    const date = '2022-11-23';

    // Data Mock
    const data = {success: true};

    // Lanzar petición a WebService
    const response = await ws.getOrdersByDay(date);

    // Testing
    expect(response).toEqual(data);
  });
  it('2. Test Get Orders', async () => {
    // Parametros
    const params = {
      page: 1,
      size: 1,
      statusId: 1,
      dateFrom: '2022-11-23',
      dateTo: '2022-11-24',
      keyword: 'test',
    };

    // Data Mock
    const data = {success: true};

    // Lanzar petición a WebService
    const response = await ws.getOrders(params);

    // Testing
    expect(response).toEqual(data);
  });

  it('3. Test Get Download Batchs By Day', async () => {
    // Parametros
    const warehouseId = 'b34579be-3ee7-483e-b30d-243e568085b1';
    const supplierId = 'd05321eb-96be-4c86-80e1-94b007773261';
    const batchHour = '8:00';
    const batchDate = '2022-11-24';

    // Data Mock
    const data = {success: true};

    // Lanzar petición a WebService
    const response = await ws.getDownloadBatchsByDay(
      warehouseId,
      supplierId,
      batchHour,
      batchDate,
    );

    // Testing
    expect(response).toEqual(data);
  });

  it('4. Test Set State Orders', async () => {
    // Parametros
    const params = {
      items: [],
      statusId: 1,
    };

    // Data Mock
    const data = {success: true};

    // Lanzar petición a WebService
    const response = await ws.setStateOrders(params);

    // Testing
    expect(response).toEqual(data);
  });
});
