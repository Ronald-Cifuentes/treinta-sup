import {render, screen} from '__tests__/test-utils';
import {Instructions} from './Instructions';

describe('<Instructions/>', () => {
  // UI TESTING
  test('#1. Render Instructions', () => {
    render(<Instructions />);
    expect(screen.getByTestId('instructions_test')).toBeInTheDocument();
  });
});
