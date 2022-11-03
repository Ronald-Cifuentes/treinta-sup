import {render, screen} from '__tests__/test-utils';
import {Play} from './Play';

describe('<PlayTest/>', () => {
  // UI TESTING
  test('#1. Render Faq', () => {
    render(<Play />);
    expect(screen.getByTestId('play_test')).toBeInTheDocument();
  });
});
