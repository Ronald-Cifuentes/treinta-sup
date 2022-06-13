import {render, screen, fireEvent, prettyDOM} from '__tests__/test-utils';
import {ChangeStates} from './ChangeStates';

describe('<ChangeStates/>', () => {
  // UI TESTING
  test('#1 - Exist', () => {
    render(<ChangeStates />);
    const changeStates = screen.getByTestId('change-states');
    expect(changeStates).toBeInTheDocument();
  });
});
