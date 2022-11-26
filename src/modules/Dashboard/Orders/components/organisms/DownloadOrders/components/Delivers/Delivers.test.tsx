import {DeliversResponse} from 'hooks/useDownloadOrders';
import {render, screen} from '__tests__/test-utils';
import {Delivers} from './Delivers';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('hooks/useDownloadOrders', () => ({
  useDownloadOrders: () => ({
    dataRetrieve: {items: []} as DeliversResponse,
    refetchRetrieve: () => null,
  }),
}));

describe('<Delivers/>', () => {
  // UI TESTING
  test('#1. Render Delivers', () => {
    render(<Delivers />);
    expect(screen.getByTestId('delivers_test')).toBeInTheDocument();
  });
});
