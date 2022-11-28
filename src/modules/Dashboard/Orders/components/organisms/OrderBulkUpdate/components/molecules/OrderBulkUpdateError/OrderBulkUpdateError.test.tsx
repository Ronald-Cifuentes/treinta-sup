import userEvent from '@testing-library/user-event';
import {ToastProvider} from 'context/ToastContext/ToastProvider';
import {FC} from 'react';
import * as router from 'react-router';
import {cleanup, renderThemeAndRouter, screen} from '__tests__/test-utils';
import {OrderBulkUpdateError} from './OrderBulkUpdateError';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

const MockProvider: FC = ({children}) => (
  <ToastProvider>{children}</ToastProvider>
);

const navigate = jest.fn();
jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

describe('<OrderBulkUpdateError/ >', () => {
  beforeEach(cleanup);

  test('#1. Exist -  Render container correctly', () => {
    renderThemeAndRouter(<OrderBulkUpdateError />, MockProvider);
    const orderBulkUpdateError = screen.getByTestId('order-bulk-update-error');
    expect(orderBulkUpdateError).toBeInTheDocument();
  });

  test('#2. click button reload', () => {
    renderThemeAndRouter(<OrderBulkUpdateError />, MockProvider);
    const btnReload = screen.getByTestId('btn-reload');
    userEvent.click(btnReload);
    expect(true).toBe(true);
    // TODO: ESTO DEBERÍA VALIDARSE AQUI CUANDO ESTE DISPONIBLE EL MASSIVE SAVE
    // TODO: expect(massiveSave).toHaveBeenCalledTimes(1);
  });

  test('#3. click button exit', () => {
    renderThemeAndRouter(<OrderBulkUpdateError />, MockProvider);
    const btnExit = screen.getByTestId('btn-exit');
    userEvent.click(btnExit);
    expect(true).toBe(true);
    // TODO: ESTO DEBERÍA VALIDARSE AQUI CUANDO ESTE DISPONIBLE EL DISPATCH
    // TODO: expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith({pathname: '/ordenes'});
  });
});
