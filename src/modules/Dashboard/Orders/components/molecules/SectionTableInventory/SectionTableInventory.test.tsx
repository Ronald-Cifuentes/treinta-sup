import {renderTheme, screen} from '__tests__/test-utils';
import {SectionTableInventory} from './SectionTableInventory';

describe('<SectionTableInventory/>', () => {
  test('#1. It should render component', () => {
    // UI TESTING
    renderTheme(<SectionTableInventory />);
    const inventory = screen.getByTestId('section-search-ctrls');
    expect(inventory).toBeInTheDocument();
  });
});
