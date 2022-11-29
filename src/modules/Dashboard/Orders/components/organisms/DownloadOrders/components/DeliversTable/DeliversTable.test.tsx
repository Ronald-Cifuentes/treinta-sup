import {
  render,
  screen,
  fireEvent,
  renderTheme,
  waitFor,
} from '__tests__/test-utils';
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
    warehouseId: 'b34579be-3ee7-483e-b30d-',
    supplierId: 'b34579be-3ee7-483e-b30d-',
    batches: [
      {
        hour: '04:00 PM',
        isEnable: true,
        date: '2022-11-22',
      },
      {
        hour: '04:00 PM',
        isEnable: true,
        date: '2022-11-22',
      },
      {
        hour: '04:00 PM',
        isEnable: true,
        date: '2022-11-22',
      },
      {
        hour: '04:00 PM',
        isEnable: true,
        date: '2022-11-22',
      },
    ],
  },
  {
    name: 'Treinta Store 2',
    warehouseId: 'b34579be-3ee7-483e-b30d-',
    supplierId: 'b34579be-3ee7-483e-b30d-',
    batches: [],
  },
];

const dataRetrieve: DeliversResponse = {items};

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('../../../../../../../../hooks/useDownloadOrders/useDownloadOrders');

const getUseOrdersDownloadByDate = jest.fn().mockReturnValue({data: 'test'});

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
      getUseOrdersDownloadByDate: jest.fn(),
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
      getUseOrdersDownloadByDate: jest.fn(),
    }));
    render(<DeliversTable />);
    expect(screen.getByTestId('delivers_table_test')).toBeInTheDocument();
  });

  // eslint-disable-next-line jest/expect-expect
  test('#3. Render Delivery Table', () => {
    typeUseDownloadOrders.mockImplementation(() => ({
      dataRetrieve,
      isErrorRetrieve: false,
      isLoadingRetrieve: false,
      isSuccessRetrieve: true,
      dispatchRetrieve: jest.fn(),
      refetchRetrieve: jest.fn(),
      getUseOrdersDownloadByDate: jest.fn(),
    }));

    render(<DeliversTable />);
  });

  test('#4. GetBatch', async () => {
    const items2: DeliverBatch[] = [
      {
        name: 'Treinta Store 1',
        warehouseId: 'b34579be-3ee7-483e-b30d-',
        supplierId: 'b34579be-3ee7-483e-b30d-',
        batches: [
          {
            hour: '04:00 PM',
            isEnable: false,
            date: '2022-11-22',
          },
        ],
      },
    ];
    const dataRetriveDisableBatch: DeliversResponse = {items: items2};

    typeUseDownloadOrders.mockImplementation(() => ({
      dataRetrieve: dataRetriveDisableBatch,
      isErrorRetrieve: false,
      isLoadingRetrieve: false,
      isSuccessRetrieve: true,
      dispatchRetrieve: jest.fn(),
      refetchRetrieve: jest.fn(),
      getUseOrdersDownloadByDate,
    }));

    renderTheme(<DeliversTable />);

    const getbash = screen.getAllByTestId('get_batch');
    expect(getbash[0]).toBeInTheDocument();
    fireEvent.click(getbash[0]);
    await waitFor(() => {
      expect(getUseOrdersDownloadByDate).toHaveBeenCalled();
      const toast = screen.getByTestId('default-Toast');
      expect(toast).toBeInTheDocument();
    });
  });
});
