import {render, screen} from '__tests__/test-utils';
import {
  DeliverBatch,
  DeliversResponse,
  useDownloadOrders,
  UseDownloadOrdersResponse,
} from 'hooks/useDownloadOrders';
import {DeliversTable} from './DeliversTable';

const items: DeliverBatch[] = [
  {
    name: 'Treinta Store 1',
    batches: [
      {
        hour: '04:00 PM',
      },
      {
        hour: '04:00 PM',
      },
      {
        hour: '04:00 PM',
      },
      {
        hour: '04:00 PM',
      },
    ],
  },
  {
    name: 'Treinta Store 2',
    batches: [],
  },
];

const dataRetrieve: DeliversResponse = {items};

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('../../../../../../../../hooks/useDownloadOrders/useDownloadOrders');

const typeUseDownloadOrders =
  useDownloadOrders as jest.Mock<UseDownloadOrdersResponse>;

describe('<DeliversTable/>', () => {
  // UI TESTING
  test('#1. Render DeliversTable', () => {
    typeUseDownloadOrders.mockImplementation(() => ({
      dataRetrieve: {items: []} as DeliversResponse,
      isErrorRetrieve: false,
      isLoadingRetrieve: false,
      isSuccessRetrieve: true,
      dispatchRetrieve: jest.fn(),
      refetchRetrieve: jest.fn(),
    }));
    render(<DeliversTable />);
    expect(screen.getByTestId('delivers_table_test')).toBeInTheDocument();
  });

  test('#2. Render with mock DeliversTable', () => {
    typeUseDownloadOrders.mockImplementation(() => ({
      dataRetrieve,
      isErrorRetrieve: false,
      isLoadingRetrieve: false,
      isSuccessRetrieve: true,
      dispatchRetrieve: jest.fn(),
      refetchRetrieve: jest.fn(),
    }));
    render(<DeliversTable />);
    expect(screen.getByTestId('delivers_table_test')).toBeInTheDocument();
  });
});
