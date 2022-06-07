import {useEffect} from 'react';
import {useQuery} from 'react-query';
import Cookie from 'universal-cookie';
import {useLocation} from 'react-router-dom';

import {useRoutes} from 'hooks';
import {ROUTES} from 'routes/types';
import {isSameHour} from 'utils/dates';
import {useAuth} from 'context/AuthContext';
import {LogProvider} from 'providers/log-provider';
import {USER_DATA_KEY} from 'config/constants';
import {UsersService} from 'services/users/users.services';

import {UserData} from './types';
import {User} from 'services/models/User';

const cookie = new Cookie();
const userService = new UsersService();

const networkErrors = ['Network Error', 'NetworkError'];
const invalidRoutes = [ROUTES.HOME];

const loadData = (): UserData | undefined => {
  const data = cookie.get(USER_DATA_KEY);
  if (data) {
    return data;
  }
};

export const useLoadUserData = (): void => {
  const {logOut, setUser, userConfig, isAuthReady, sessionStarted} = useAuth();
  const {getI18nRoute} = useRoutes();
  const {pathname} = useLocation();
  const invalidPathnames = invalidRoutes.map(getI18nRoute);

  const {data, isError, error, refetch, isSuccess, isLoading, remove} =
    useQuery<UserData, Error>(
      'user-data',
      async () => {
        const user = await userService.getUser(userConfig?.uid as string);
        return {
          user,
          lastRequest: new Date(),
        };
      },
      {enabled: false, retry: 3, retryDelay: 1000, initialData: loadData()},
    );

  const isNecessaryToUpdate = (): boolean =>
    !data || (data && !isSameHour(data?.lastRequest));

  useEffect(() => {
    if (
      !isLoading &&
      sessionStarted &&
      userConfig?.uid &&
      isNecessaryToUpdate() &&
      !userConfig?.showOnBoarding &&
      !invalidPathnames.includes(pathname)
    ) {
      refetch();
    }
  }, [userConfig, pathname, sessionStarted]);

  useEffect(() => {
    if (data && isSuccess && isAuthReady) {
      setUser(data?.user);
      cookie.set(USER_DATA_KEY, data, {secure: true});
    }
  }, [data, isSuccess, isAuthReady]);

  useEffect(() => {
    if (data && !isAuthReady && !sessionStarted) {
      remove();
    }
  }, [isAuthReady, sessionStarted]);

  useEffect(() => {
    if (isError) {
      const isBadNetwork = !error || networkErrors.includes(error.message);
      LogProvider.getInstance().logError({
        error: error as Error,
        name: 'LOGIN_ERROR',
        context: {
          isBadNetwork,
          uid: userConfig?.uid,
          error: JSON.stringify(error),
        },
      });
      logOut(
        ROUTES.LOGIN,
        isBadNetwork
          ? 'login.sign-in-network-error'
          : 'login.sign-in-internal-error',
      );
    }
  }, [error, isError]);
};
