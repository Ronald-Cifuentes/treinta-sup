import {ToastProvider} from 'context/ToastContext/ToastProvider';
import {FC} from 'react';
import {cleanup, renderThemeAndRouter, screen} from '__tests__/test-utils';
import {OrderBulkUpdate} from './OrderBulkUpdate';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

const MockProvider: FC = ({children}) => (
  <ToastProvider>{children}</ToastProvider>
);

describe('<OrderBulkUpdate />', () => {
  beforeEach(cleanup);

  test('1. Exist - Render correctly', () => {
    renderThemeAndRouter(<OrderBulkUpdate />, MockProvider);
    const orderBulkUpdate = screen.getByTestId('order-bulk-update');
    expect(orderBulkUpdate).toBeInTheDocument();
  });
});
