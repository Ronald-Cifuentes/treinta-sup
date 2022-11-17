import {cleanup, fireEvent, render, screen} from '__tests__/test-utils';
import {ButtonStep} from './ButtonStep';

const state: {buttonStep: number | null} = {buttonStep: null};
const spyDispatch = jest.fn();

jest.mock('context/UploadBulkContext', () => ({
  useUploadBulk: () => ({
    state,
    dispatch: spyDispatch,
  }),
  ACTIONS: {UPLOAD_FILE_RESET: ''},
}));

describe('<ButtonStep />', () => {
  beforeEach(cleanup);

  test('#1. Exist - Render correctly', () => {
    render(<ButtonStep />);
    const btnStep = screen.getByTestId('order-bulk-update-button-step');
    expect(btnStep).toBeInTheDocument();
  });

  test('#2. disabled', () => {
    render(<ButtonStep disabled />);
    const btnStep = screen.getByTestId(
      'order-bulk-update-button-step',
    ) as HTMLButtonElement;
    expect(btnStep.disabled).toBe(true);
  });

  test('#3. enabled', () => {
    render(<ButtonStep />);
    const btnStep = screen.getByTestId(
      'order-bulk-update-button-step',
    ) as HTMLButtonElement;
    expect(btnStep.disabled).toBe(false);
  });

  test('#4. internal onclick - case default', () => {
    const spyOnClick = jest.fn();
    render(<ButtonStep onClick={spyOnClick} />);
    const btnStep = screen.getByTestId('order-bulk-update-button-step');
    fireEvent.click(btnStep);
    expect(spyOnClick).toHaveBeenCalledTimes(1);
  });

  test('#5. internal onclick - case 0', () => {
    const spyOnClick = jest.fn();
    state.buttonStep = 0;
    render(<ButtonStep onClick={spyOnClick} />);
    const btnStep = screen.getByTestId('order-bulk-update-button-step');
    fireEvent.click(btnStep);
    expect(spyOnClick).toHaveBeenCalledTimes(1);
    const input = screen.getByText(
      'order-bulk-update.continue-revision',
    ) as HTMLInputElement;
    expect(input.textContent).toBe('order-bulk-update.continue-revision');
  });

  test('#6. internal onclick - case 1', () => {
    const spyOnClick = jest.fn();
    state.buttonStep = 1;
    render(<ButtonStep onClick={spyOnClick} />);
    const btnStep = screen.getByTestId('order-bulk-update-button-step');
    fireEvent.click(btnStep);
    expect(spyOnClick).toHaveBeenCalledTimes(0);
    const input = screen.getByText(
      'order-bulk-update.upload-file-again',
    ) as HTMLInputElement;
    expect(input.textContent).toBe('order-bulk-update.upload-file-again');
  });

  test('#7. internal onclick - case 2', () => {
    const spyOnClick = jest.fn();
    state.buttonStep = 2;
    render(<ButtonStep onClick={spyOnClick} />);
    const btnStep = screen.getByTestId('order-bulk-update-button-step');
    fireEvent.click(btnStep);
    expect(spyOnClick).toHaveBeenCalledTimes(1);
    const input = screen.getByText(
      'order-bulk-update.load-images',
    ) as HTMLInputElement;
    expect(input.textContent).toBe('order-bulk-update.load-images');
  });

  test('#8. internal onclick - case 3', () => {
    const spyOnClick = jest.fn();
    state.buttonStep = 3;
    render(<ButtonStep onClick={spyOnClick} />);
    const btnStep = screen.getByTestId('order-bulk-update-button-step');
    fireEvent.click(btnStep);
    expect(spyOnClick).toHaveBeenCalledTimes(1);
    const input = screen.getByText(
      'order-bulk-update.confirm',
    ) as HTMLInputElement;
    expect(input.textContent).toBe('order-bulk-update.confirm');
  });
});
