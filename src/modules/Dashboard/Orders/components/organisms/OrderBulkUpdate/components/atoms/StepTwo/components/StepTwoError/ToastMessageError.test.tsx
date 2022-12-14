import {renderTheme, screen} from '__tests__/test-utils';
import {ToastMessageError} from './ToastMessageError';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<ToastMessage />', () => {
  test('#1. Exist - Render correctly ToastMessageError', () => {
    renderTheme(<ToastMessageError numberError={500} />);
    const existToastMessage = screen.getByTestId('toast-message-id');
    expect(existToastMessage).toBeInTheDocument();
  });

  test('#2. Exist - Render correctly ToastMessageError without numberErrors', () => {
    renderTheme(<ToastMessageError />);
    const existToastMessage = screen.getByTestId('toast-message-id');
    expect(existToastMessage).toBeInTheDocument();
  });
});
