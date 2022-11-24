import {
  cleanup,
  fireEvent,
  renderThemeAndRouter,
  screen,
} from '__tests__/test-utils';
import {ACTIONS, State} from 'context/OrderBulkUpdateContext';
import {Steps} from './Steps';

const state = {} as jest.Mock<State>;
const dispatch = jest.fn(arg => arg);

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('context/OrderBulkUpdateContext', () => ({
  useOrderBulkUpdate: () => ({
    state,
    dispatch,
  }),
  ACTIONS: {
    UPLOAD_FILE_RESET: 'UPLOAD_FILE_RESET',
    UPLOAD_FILE_SUCCESS: 'UPLOAD_FILE_SUCCESS',
    UPLOAD_FILE_ERROR: 'UPLOAD_FILE_ERROR',
    SET_IS_VALID: 'SET_IS_VALID',
    SET_STEP: 'SET_STEP',
  },
}));

describe('<Steps/>', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('#1. Exist - Render correctly - steps', () => {
    renderThemeAndRouter(<Steps />);
    const steps = screen.getByTestId('steps-test');
    expect(steps).toBeInTheDocument();
  });

  test('#2. Exist - Render correctly - button goBack', () => {
    renderThemeAndRouter(<Steps />);
    const steps = screen.getByTestId('btn-go-back-test');
    fireEvent.click(steps);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ACTIONS.SET_STEP,
      payload: {step: 0},
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
  });

  test('#3. Exist - Render correctly - button step', () => {
    renderThemeAndRouter(<Steps />);
    const steps = screen.getByTestId('btn-step-test') as HTMLButtonElement;
    expect(steps).toBeDisabled();
  });
});
