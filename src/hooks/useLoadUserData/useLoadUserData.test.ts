import {renderHook} from '__tests__/test-utils';
import {UsersService} from 'services/users/users.services';

import {useLoadUserData} from './useLoadUserData';

const spySetUser = jest.fn();

jest.mock('config/firebase', () => null);
jest.mock('context/AuthContext', () => ({
  useAuth: jest.fn().mockImplementation(() => ({
    isAuthReady: true,
    logOut: jest.fn(),
    setUser: spySetUser,
    userConfig: {uid: 'test'},
    sessionStarted: true,
  })),
}));
const spyGetUser = jest.fn().mockReturnValue({id: 'test'});

jest.spyOn(UsersService.prototype, 'getUser').mockImplementation(spyGetUser);

// TODO: Replace .not expects to propper case

describe('useLoadUserData', () => {
  it('Should not get user data', async () => {
    const {waitFor} = renderHook(() => useLoadUserData());

    await waitFor(() => {
      expect(spyGetUser).not.toBeCalled();
    });
  });

  it('Should not set user data', async () => {
    const {waitFor} = renderHook(() => useLoadUserData());

    await waitFor(() => {
      expect(spySetUser).not.toBeCalled();
    });
  });
});
