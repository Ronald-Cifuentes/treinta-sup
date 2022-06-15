import {render, screen} from '__tests__/test-utils';
import {SpecialLineTabs} from './SpecialLineTabs';

describe('<SpecialLineTabs/>', () => {
  // UI TESTING
  test('#1. Exist', () => {
    render(<SpecialLineTabs />);
    const specialLineTabs = screen.getByTestId('special-line-tabs');
  });
});
