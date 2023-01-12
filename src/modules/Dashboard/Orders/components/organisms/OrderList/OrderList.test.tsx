import {ToastProvider} from 'context/ToastContext/ToastProvider';
import {FC} from 'react';
import {
  customRender,
  screen,
  fireEvent,
  renderTheme,
} from '__tests__/test-utils';
import {ModalGeneric} from '../../atoms';
import {OrderList} from './OrderList';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

const MockProvider: FC<{prop?: string}> = ({children}) => (
  <ToastProvider>{children}</ToastProvider>
);

describe('<OrderList/>', () => {
  // UI TESTING
  test('#1. Render Correctly OrderList', () => {
    customRender(<OrderList />, MockProvider);
    const detail = screen.getByTestId('dashboard-layout');
    expect(detail).toBeInTheDocument();
  });
  test('#2. Trigger button success', () => {
    const spyBtn = jest.fn();
    renderTheme(<ModalGeneric openModal={true} closeModal={spyBtn} />);
    const btnSuccess = screen.getByTestId('btn-success');
    fireEvent.click(btnSuccess);
    expect(spyBtn).toHaveBeenCalled();
  });
});
