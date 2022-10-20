import {customRender, screen} from '__tests__/test-utils';

import {PublicRoute} from './PublicRoute';

const mockedNavigate = jest.fn();
let isLogged = false;

jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn(() => ({
    isLoggedIn: jest.fn().mockReturnValue(isLogged),
    userConfig: {uid: 'uid'},
  })),
}));

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockedNavigate,
}));

jest.mock('config/firebase', () => null);

describe('<PublicRoute />', () => {
  beforeEach(() => {
    customRender(
      <PublicRoute>
        <p>Test</p>
      </PublicRoute>,
    );
    isLogged = true;
  });

  it('should render children correctly', () => {
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should render children correctly without access', () => {
    expect(mockedNavigate).toBeCalled();
  });
});
