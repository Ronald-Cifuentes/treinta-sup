import {render, screen, fireEvent} from '__tests__/test-utils';
import {Instructions} from './Instructions';

describe('<Instructions/>', () => {
  test('#1. Render Instructions', () => {
    render(<Instructions />);
    expect(screen.getByTestId('instructions_test')).toBeInTheDocument();
  });

  test('#2. Instruction Open Link Video', () => {
    render(<Instructions />);
    expect(screen.getByTestId('instructions_test')).toBeInTheDocument();

    const btnVideo = screen.getByTestId('guide-view-video');
    fireEvent.click(btnVideo);
  });
});
