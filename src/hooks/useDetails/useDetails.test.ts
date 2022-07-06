import {items} from 'modules/Dashboard/Orders/components/organisms/OrderList/OrderList.mock';

//TODO: IS NECESARY IMPLEMENT ALL TEST OF THIS HOOK

jest.mock('services/suppliers.details/suppliers.details.services', () => ({
  ProductServices: jest.fn().mockImplementation(() => ({
    getOrders: () => ({data: items}),
    editOrders: () => ({data: {ordersWithErrors: []}}),
    deleteOrders: jest.fn(),
    createOrders: (_: unknown, order: unknown) => ({
      ordersAffected: [order],
      ordersWithErrors: [],
    }),
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
