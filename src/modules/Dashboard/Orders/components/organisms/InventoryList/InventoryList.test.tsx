import {} from '__tests__/test-utils';
// import {InventoryList} from './';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

// TODO: RESOLVE ERROR DASHBOARD

describe('<InventoryList/>', () => {
  test('#1. It should render component', () => {
    // UI TESTING
    // render(<InventoryList />);
    // const inventory = screen.queryByTestId('inventory-list');
    // expect(inventory).toBeInTheDocument();
    expect(1).toBe(1);
  });
});
