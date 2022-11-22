import {ToastProvider} from 'context/ToastContext/ToastProvider';
import {FC} from 'react';
import {customRender, screen} from '__tests__/test-utils';
import {DownloadOrders} from './DownloadOrders';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

const MockProvider: FC<{prop?: string}> = ({children}) => (
  <ToastProvider>{children}</ToastProvider>
);

describe('<DownloadOrders/>', () => {
  // Render Screen Download Orders
  test('#1. Render DownloadOrders', () => {
    customRender(<DownloadOrders />, MockProvider);
    const detail = screen.getByTestId('dashboard-layout');
    expect(detail).toBeInTheDocument();
  });
});
