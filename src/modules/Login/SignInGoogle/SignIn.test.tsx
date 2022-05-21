import {render, screen, fireEvent} from '__tests__/test-utils';

import {SignIn} from './SignIn';

const spyCallEvent = jest.fn();
const spyNavigation = jest.fn();
jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));
jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn(() => ({isLoggedIn: jest.fn().mockReturnValue(false)})),
}));
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: jest.fn().mockImplementation(() => spyNavigation),
}));
jest.mock('providers/event-provider', () => ({
  EventProvider: {
    getInstance: jest.fn().mockImplementation(() => ({
      logAnalytics: jest.fn(),
      logEventAmplitude: spyCallEvent,
    })),
  },
}));

describe('<SignIn />', () => {
  beforeEach(() => {
    render(<SignIn />);
  });

  it('Should render correctly', () => {
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });

  it('Should navigate login', () => {
    const button = screen.getByTestId('signInGoogle_button_logInWithPhone');
    fireEvent.click(button);
    expect(spyNavigation).toBeCalled();
  });

  it('Should call event amplitude', () => {
    const link = screen.getByTestId('signInGoogle_link_signUp');
    fireEvent.click(link);
    expect(spyCallEvent).toBeCalled();
  });
});
