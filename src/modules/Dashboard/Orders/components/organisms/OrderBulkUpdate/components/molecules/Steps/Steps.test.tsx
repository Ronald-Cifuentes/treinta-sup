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
import {handleButtonStep, Steps} from './Steps';

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

  test('#4. Exist - Render correctly - dispatch', () => {
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

  test('#5. Exist - Render correctly - dispatch', () => {
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

  test('#6. Exist - Render correctly - helplink', () => {
    window.open = jest.fn();
    const myState = {
      step: 0,
      files: [new File(['Test'], 'Test.txt', {type: 'txt'})],
    } as State;
    useOrderBulkUpdateMock.mockImplementation(() => ({
      state: myState,
      dispatch,
    }));
    renderThemeAndRouter(<Steps />);
    const linksBtn = screen.getByTestId('help-link-test');
    fireEvent.click(linksBtn);

    const link =
      'https://www.loom.com/share/folder/a38b77f9b4334a5392340e849ae91423';
    expect(window.open).toHaveBeenCalledWith(link, '_blank', 'noopener');
  });

  test('#7. Validate action handleButtonStep', () => {
    const dispatch = jest.fn();
    const setModal = jest.fn();
    handleButtonStep({dispatch, step: 0, setModal});

    expect(dispatch).toHaveBeenCalledWith({
      type: ACTIONS.SET_STEP,
      payload: {step: 1},
    });

    handleButtonStep({dispatch, step: 1, setModal});

    expect(setModal).toHaveBeenCalledWith(true);
  });
});
