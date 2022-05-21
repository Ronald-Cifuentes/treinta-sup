import {render, screen} from '__tests__/test-utils';

import {DownloadList} from './DownloadList';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn(() => ({isLoggedIn: jest.fn().mockReturnValue(false)})),
}));
jest.mock('context/DashboardContext/DashboardContext', () => ({
  useDashboard: jest.fn().mockImplementation(() => ({
    rightBarNavigation: {
      canGoBack: jest.fn(),
    },
  })),
}));
jest.mock('context/ToastContext/ToastContext', () => ({
  useToast: jest.fn().mockImplementation(() => ({
    setLabel: jest.fn(),
    setOpen: jest.fn(),
    setSeverity: jest.fn(),
  })),
}));
describe('<DownloadList />', () => {
  it('Should render correctly', () => {
    render(<DownloadList user={undefined} moduleName="test" />);
    expect(screen.queryAllByTestId('download_list_option')).toBeDefined();
  });
});
