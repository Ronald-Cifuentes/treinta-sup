import {render, screen} from '__tests__/test-utils';
import {SectionSearchCtrls} from './SectionSearchCtrls';

describe('<SectionSearchCtrls/>', () => {
  test('#1. It should render component', () => {
    // UI TESTING
    render(<SectionSearchCtrls />);
    const inventory = screen.getByTestId('section-search-ctrls');
    expect(inventory).toBeInTheDocument();
  });
});
