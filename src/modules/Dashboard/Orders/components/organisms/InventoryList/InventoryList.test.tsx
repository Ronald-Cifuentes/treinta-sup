import {render, screen} from '__tests__/test-utils';
import {InventoryList} from './InventoryList';

describe('<InventoryList/>', () => {
  test('#1. It should render component', () => {
    // UI TESTING
    render(<InventoryList />);
    const inventory = screen.getByTestId('inventory-list');
    expect(inventory).toBeInTheDocument();
  });
});
