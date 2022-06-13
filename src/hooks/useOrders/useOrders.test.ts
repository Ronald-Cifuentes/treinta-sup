// import {ChangeEvent} from 'react';
// import {renderHook, waitFor} from '__tests__/test-utils';
import {orders} from '../../modules/Dashboard/Orders/Orders.mock';

// import {useOrders} from './useOrders';

jest.mock('services/orders/orders.services', () => ({
  ProductServices: jest.fn().mockImplementation(() => ({
    getOrders: () => ({data: orders}),
    editOrders: () => ({data: {ordersWithErrors: []}}),
    deleteOrders: jest.fn(),
    createOrders: (_: any, order: any) => ({
      ordersAffected: [order],
      ordersWithErrors: [],
    }),
  })),
}));

jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn().mockImplementation(() => ({store: {id: 'store-id'}})),
}));

// describe('useOrders', () => {
//   it('Should load initial products', async () => {
//     const {result, waitForNextUpdate} = renderHook(() => useOrders(''));
//     await waitForNextUpdate();
//     expect(result.current.data.length).toBeGreaterThan(0);
//   });
//   it('Should filter by category', async () => {
//     const {result, waitForNextUpdate} = renderHook(() =>
//       useOrders('Abarrotes'),
//     );
//     await waitForNextUpdate();
//     expect(result.current.filterData(result.current.formattedData).length).toBe(
//       3,
//     );
//   });
//   it('Should set searchValue using setSearchFilter', async () => {
//     await waitFor(() => {
//       const {result} = renderHook(() => useOrders(''));
//       result.current.setSearchFilter('Pera111');
//       expect(
//         result.current.filterData(result.current.formattedData).length,
//       ).toBe(1);
//     });
//   });
//   it('Should set searchValue using changeSearchValue', async () => {
//     await waitFor(() => {
//       const {result} = renderHook(() => useOrders(''));
//       result.current.changeSearchValue({
//         target: {value: 'Pera111'},
//       } as ChangeEvent<HTMLInputElement>);
//       expect(
//         result.current.filterData(result.current.formattedData).length,
//       ).toBe(1);
//     });
//   });
//   it('Should update selected order', async () => {
//     await waitFor(() => {
//       const {result} = renderHook(() => useOrders(''));
//       result.current.setSelectedOrder('name');
//       expect(result.current.selectedOrder).toBe('name');
//     });
//   });
//   it('Should update product', async () => {
//     const {result, waitForNextUpdate} = renderHook(() => useOrders(''));
//     const productToEdit = {...products[0], name: 'Edited Product'};
//     result.current.updateProduct(productToEdit);
//     await waitForNextUpdate();
//     expect(result.current.formattedData[0]).toMatchObject(productToEdit);
//   });
//   it('Should delete product', async () => {
//     const {result, waitForNextUpdate} = renderHook(() => useOrders(''));
//     result.current.deleteProduct(products[0]);
//     await waitForNextUpdate();
//     expect(result.current.formattedData.length).toBe(products.length - 1);
//   });
//   it('Should create product', async () => {
//     const {result, waitForNextUpdate} = renderHook(() => useOrders(''));
//     const productToCreate = {
//       ...products[0],
//       id: '66a3fb02-e860-5a9c-9bc8-1873704c345e',
//       name: 'New Product',
//     };
//     result.current.createProduct(productToCreate);
//     await waitForNextUpdate();
//     expect(
//       result.current.formattedData.find(
//         product => product.id === productToCreate.id,
//       ),
//     ).toBeDefined();
//   });
//   it('Should return formattedData correctly', async () => {
//     const {result, waitForNextUpdate} = renderHook(() => useOrders(''));
//     await waitForNextUpdate();
//     expect(result.current.formattedData.length).toBeGreaterThan(0);
//   });
//   it('Should return searchCoincidences correctly', async () => {
//     await waitFor(() => {
//       const {result} = renderHook(() => useOrders(''));
//       result.current.setSearchFilter('Pera111');
//       expect(result.current.searchCoincidences).toBe(1);
//     });
//   });
// });
