import userEvent from '@testing-library/user-event';
import {ToastProvider} from 'context/ToastContext/ToastProvider';
import {FC} from 'react';
import * as router from 'react-router';
import {cleanup, renderThemeAndRouter, screen} from '__tests__/test-utils';
import {InventoryBulkLoadError} from './InventoryBulkLoadError';

const state = {};
const spyDispatch = jest.fn();
const massiveSave = jest.fn();

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

jest.mock('hooks/useParseXlsx', () => ({
  useParseXlsx: () => ({
    massiveSave,
  }),
}));

jest.mock('context/UploadBulkContext', () => ({
  useUploadBulk: () => ({
    state,
    dispatch: spyDispatch,
  }),
  ACTIONS: {
    UPLOAD_FILE_RESET: 'UPLOAD_FILE_RESET',
  },
}));

const MockProvider: FC = ({children}) => (
  <ToastProvider>{children}</ToastProvider>
);

const navigate = jest.fn();
jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

describe('<InventoryBulkLoadError/ >', () => {
  beforeEach(cleanup);

  test('#1. Exist -  Render container correctly', () => {
    renderThemeAndRouter(<InventoryBulkLoadError />, MockProvider);
    const inventoryBulkLoadError = screen.getByTestId(
      'inventory-bulkload-error',
    );
    expect(inventoryBulkLoadError).toBeInTheDocument();
  });

  test('#2. click button reload', () => {
    renderThemeAndRouter(<InventoryBulkLoadError />, MockProvider);
    const btnReload = screen.getByTestId('btn-reload');
    userEvent.click(btnReload);
    expect(massiveSave).toHaveBeenCalledTimes(1);
  });

  test('#3. click button exit', () => {
    renderThemeAndRouter(<InventoryBulkLoadError />, MockProvider);
    const btnExit = screen.getByTestId('btn-exit');
    userEvent.click(btnExit);
    expect(spyDispatch).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith({pathname: '/inventario'});
  });
});
