import {render, screen} from '__tests__/test-utils';
import {ChangeStates} from './ChangeStates';
jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<ChangeStates/>', () => {
  // UI TESTING
  test('#1 - Exist', () => {
    render(<ChangeStates />);
    const changeStates = screen.getByTestId('change-states');
    expect(changeStates).toBeInTheDocument();
  });
});
