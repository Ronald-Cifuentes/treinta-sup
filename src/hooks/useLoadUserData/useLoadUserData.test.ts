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

describe('useLoadUserData', () => {
  it('Should get user data', async () => {
    const {waitFor} = renderHook(() => useLoadUserData());

    await waitFor(() => {
      expect(spyGetUser).toBeCalled();
    });
  });

  it('Should set user data', async () => {
    const {waitFor} = renderHook(() => useLoadUserData());

    await waitFor(() => {
      expect(spySetUser).toBeCalled();
    });
  });
});
