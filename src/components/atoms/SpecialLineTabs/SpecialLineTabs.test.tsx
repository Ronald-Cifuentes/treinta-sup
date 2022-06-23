import {render, screen} from '__tests__/test-utils';
import {SpecialLineTabs} from './SpecialLineTabs';

describe('<SpecialLineTabs/>', () => {
  // UI TESTING
  test('#1. It should render component', () => {
    render(<SpecialLineTabs />);
    const specialLineTabs = screen.getByTestId('special-line-tabs');
    expect(specialLineTabs).toBeInTheDocument();
  });
});
