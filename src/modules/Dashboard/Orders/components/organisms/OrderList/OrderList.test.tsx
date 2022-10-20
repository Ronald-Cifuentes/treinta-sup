import {ToastProvider} from 'context/ToastContext/ToastProvider';
import {FC} from 'react';
import {customRender, screen} from '__tests__/test-utils';
import {OrderList} from './OrderList';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

const MockProvider: FC<{prop?: string}> = ({children}) => (
  <ToastProvider>{children}</ToastProvider>
);

describe('<Detail/>', () => {
  // UI TESTING
  test('#1. Exist', () => {
    customRender(<OrderList />, MockProvider);
    const detail = screen.getByTestId('dashboard-layout');
    // render(<h1>Hola</h1>);
    // const detail = screen.getByText('Hola');
    expect(detail).toBeInTheDocument();
  });
});
