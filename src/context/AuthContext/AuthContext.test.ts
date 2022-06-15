/* eslint-disable @typescript-eslint/no-empty-function */
import { ROUTES } from 'routes/types';
import { userConfig } from '__mocks__/user.mock';
import { renderHook } from '__tests__/test-utils';
import { UsersService } from 'services/users/users.services';

import { useAuth } from './AuthContext';
import { AuthProvider } from './AuthProvider';

const spyNavigate = jest.fn();
const spySignInWithPopup = jest.fn();

// TODO: Replace .not expects to propper case

jest.mock('config/firebase', () => ({
  auth: { currentUser: {} },
}));
jest.mock('@firebase/auth', () => ({
  GoogleAuthProvider: class {
    setCustomParameters(): void { }
  },
  signInWithPopup: jest.fn().mockImplementation(() => {
    spySignInWithPopup();
  }),
  signOut: jest.fn().mockImplementation(() => Promise.resolve()),
  signInWithCustomToken: jest.fn().mockImplementation(() => Promise.reject()),
  onAuthStateChanged: jest.fn().mockImplementation((_, callback) => {
    callback(userConfig);
  }),
}));
jest.mock('hooks', () => ({
  ...jest.requireActual('hooks'),
  useNavigateI18n: jest.fn().mockImplementation(() => spyNavigate),
}));
jest.mock('utils', () => ({
  getDateUtc: jest.fn(),
  isAfterOneWeekUtc: jest.fn(),
}));

describe('<AuthContext /> - useAuth', () => {
  it('Should update firebase status', async () => {
    const spyValidateUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve());
    jest
      .spyOn(UsersService.prototype, 'validateUser')
      .mockImplementation(spyValidateUser);

    const { result, waitFor } = renderHook(() => useAuth(), AuthProvider);

    await waitFor(() => {
      expect(spyValidateUser).not.toBeCalled();
      expect(result.current.userConfig).toBeTruthy();
      expect(result.current.isLoggedIn()).toBe(true);
    });
  });
  it('Should not update firebase status with error', async () => {
    const spyValidateUser = jest
      .fn()
      .mockImplementation(() => Promise.resolve('test'));
    jest
      .spyOn(UsersService.prototype, 'validateUser')
      .mockImplementation(spyValidateUser);

    const { waitFor } = renderHook(() => useAuth(), AuthProvider);

    await waitFor(() => {
      expect(spyValidateUser).not.toBeCalled();
      expect(spyNavigate).not.toBeCalled();
    });
  });
  it('Should call logout invalid user', async () => {
    const { result, waitFor } = renderHook(() => useAuth(), AuthProvider);

    await waitFor(() => {
      result.current.logOut(ROUTES.LOGIN, '');
      expect(spyNavigate).toBeCalled();
    });
  });
  it('Should call sign in with google', async () => {
    const { result, waitFor } = renderHook(() => useAuth(), AuthProvider);

    await waitFor(() => {
      result.current.googleSignIn();
      expect(spySignInWithPopup).toBeCalled();
    });
  });
});
