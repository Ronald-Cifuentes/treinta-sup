import {render, screen} from '__tests__/test-utils';
import {InventoryList} from './';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<InventoryList/>', () => {
  test('#1. It should render component', () => {
    // UI TESTING
    render(<InventoryList />);
    const inventory = screen.queryByTestId('inventory-list');
    expect(inventory).toBeInTheDocument();
  });
});
