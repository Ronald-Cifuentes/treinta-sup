import {items} from 'modules/Dashboard/Orders/components/organisms/OrderList/OrderList.mock';

//TODO: IS NECESARY IMPLEMENT ALL TEST OF THIS HOOK

jest.mock('services/suppliers.products/suppliers.products.services', () => ({
  ProductServices: jest.fn().mockImplementation(() => ({
    getWarehouses: () => ({data: items}),
  })),
}));

jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn().mockImplementation(() => ({store: {id: 'store-id'}})),
}));

describe('useOrders', () => {
  test('#1', () => {
    expect(1).toBe(1);
  });
});
