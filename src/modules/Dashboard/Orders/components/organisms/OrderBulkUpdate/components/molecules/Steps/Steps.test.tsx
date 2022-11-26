import {
  cleanup,
  fireEvent,
  renderThemeAndRouter,
  screen,
} from '__tests__/test-utils';
import {
  ACTIONS,
  State,
  useOrderBulkUpdate,
} from 'context/OrderBulkUpdateContext';
import {Steps} from './Steps';

const dispatch = jest.fn(arg => arg);
jest.mock('context/OrderBulkUpdateContext');

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

const useOrderBulkUpdateMock = useOrderBulkUpdate as jest.MockedFunction<
  typeof useOrderBulkUpdate
>;

describe('<Steps/>', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('#1. Exist - Render correctly - steps', () => {
    const myState = {} as State;
    useOrderBulkUpdateMock.mockImplementation(() => ({
      state: myState,
      dispatch,
    }));
    renderThemeAndRouter(<Steps />);
    const steps = screen.getByTestId('steps-test');
    expect(steps).toBeInTheDocument();
  });

  test('#2. Exist - Render correctly - button goBack', () => {
    const myState = {
      step: 0,
      files: [new File(['Test'], 'Test.txt', {type: 'txt'})],
    } as State;
    useOrderBulkUpdateMock.mockImplementation(() => ({
      state: myState,
      dispatch,
    }));
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
    const myState = {} as State;
    useOrderBulkUpdateMock.mockImplementation(() => ({
      state: myState,
      dispatch,
    }));
    renderThemeAndRouter(<Steps />);
    const steps = screen.getByTestId('btn-step-test') as HTMLButtonElement;
    expect(steps).toBeDisabled();
  });

  test('#1. Exist - Render correctly - dispatch', () => {
    const myState = {step: -1} as State;
    useOrderBulkUpdateMock.mockImplementation(() => ({
      state: myState,
      dispatch,
    }));
    renderThemeAndRouter(<Steps />);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONS.SET_STEP,
      payload: {step: 0},
    });
    const steps = screen.getByTestId('btn-step-test') as HTMLButtonElement;
    expect(steps).toBeDisabled();
  });

  test('#2. Exist - Render correctly - dispatch', () => {
    const myState = {step: 2} as State;
    useOrderBulkUpdateMock.mockImplementation(() => ({
      state: myState,
      dispatch,
    }));
    renderThemeAndRouter(<Steps />);
    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONS.SET_STEP,
      payload: {step: 1},
    });
    const steps = screen.getByTestId('btn-step-test') as HTMLButtonElement;
    expect(steps).toBeDisabled();
  });
});
