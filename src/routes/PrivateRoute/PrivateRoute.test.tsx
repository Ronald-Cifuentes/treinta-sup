import {customRender, screen} from '__tests__/test-utils';

import {PrivateRoute} from './PrivateRoute';

let isLoggedIn = true;

jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn(() => ({
    isLoggedIn: jest.fn().mockReturnValue(isLoggedIn),
    userConfig: {uid: 'uid'},
    isAuthReady: isLoggedIn,
  })),
}));

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  Navigate: (): JSX.Element => <span />,
}));

jest.mock('config/firebase', () => null);

describe('<PrivateRoute />', () => {
  beforeEach(() => {
    customRender(
      <PrivateRoute>
        <p>Test</p>
      </PrivateRoute>,
    );
    isLoggedIn = false;
  });

  it('should render children correctly', () => {
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render children correctly without access', () => {
    expect(screen.queryByText('Test')).not.toBeInTheDocument();
  });
});
