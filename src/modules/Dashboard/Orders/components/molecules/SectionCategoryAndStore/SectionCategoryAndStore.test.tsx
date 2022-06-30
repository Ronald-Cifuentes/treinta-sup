import {render, screen} from '__tests__/test-utils';
import {SectionCategoryAndStore} from './SectionCategoryAndStore';

describe('<SectionCategoryAndStore/>', () => {
  test('#1. It should render component', () => {
    // UI TESTING
    render(<SectionCategoryAndStore />);
    const inventory = screen.getByTestId('section-search-ctrls');
    expect(inventory).toBeInTheDocument();
  });
});
