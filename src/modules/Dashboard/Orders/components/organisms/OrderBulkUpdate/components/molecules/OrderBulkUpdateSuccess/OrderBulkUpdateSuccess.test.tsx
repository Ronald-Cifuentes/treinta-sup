import {ToastProvider} from 'context/ToastContext/ToastProvider';
import {FC} from 'react';
import * as router from 'react-router';
import {
  cleanup,
  fireEvent,
  renderThemeAndRouter,
  screen,
} from '__tests__/test-utils';
import {OrderBulkUpdateSuccess} from './OrderBulkUpdateSuccess';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

const MockProvider: FC = ({children}) => (
  <ToastProvider>{children}</ToastProvider>
);

const navigate = jest.fn();
jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

describe('<OrderBulkUpdateSuccess/ >', () => {
  beforeEach(cleanup);

  test('#1. Exist -  Render container correctly', () => {
    renderThemeAndRouter(<OrderBulkUpdateSuccess />, MockProvider);
    const orderBulkUpdateSuccess = screen.getByTestId(
      'order-bulk-update-success',
    );
    expect(orderBulkUpdateSuccess).toBeInTheDocument();
  });

  test('#2. Click button', () => {
    renderThemeAndRouter(<OrderBulkUpdateSuccess />, MockProvider);
    const btnBack = screen.getByTestId('btn-back');
    fireEvent.click(btnBack);
    expect(navigate).toHaveBeenCalledWith({pathname: '/ordenes'});
  });
});
