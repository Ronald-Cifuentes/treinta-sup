import {
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCustomToken,
} from '@firebase/auth';
import Cookie from 'universal-cookie';
import {useState, FC, useEffect} from 'react';

import {User, UserConfig, AuthMethods} from 'services/models';
import {ROUTES} from 'routes/types';
import {auth} from 'config/firebase';
import {LogProvider} from 'providers/log-provider';
import {getDateUtc, isAfterOneWeekUtc} from 'utils';
import {useInitConfigs, useNavigateI18n} from 'hooks';
import {UsersService} from 'services/users/users.services';
import {USER_CONFIG_KEY, USER_DATA_KEY} from 'config/constants';

import {AuthContextType} from './types';
import {AuthContext} from './AuthContext';

const cookie = new Cookie();
const userService = new UsersService();

const loadUserConfig = (): UserConfig => {
  const data = sessionStorage.getItem(USER_CONFIG_KEY);
  return data ? JSON.parse(data) : undefined;
};

const persistUserConfig = (userConfig: UserConfig): void => {
  const currentData = loadUserConfig();
  const data = {
    uid: userConfig?.uid,
    showOnBoarding:
      currentData?.showOnBoarding && userConfig?.showOnBoarding !== false
        ? true
        : userConfig?.showOnBoarding,
  };
  sessionStorage.setItem(USER_CONFIG_KEY, JSON.stringify(data));
};

export const AuthProvider: FC = ({children}) => {
  const [userConfig, setUserConfig] = useState<UserConfig | undefined>(
    loadUserConfig,
  );
  const [user, setUser] = useState<User>();
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);
  const [sessionStarted, setSessionStarted] = useState<boolean>(false);
  const [loadedSession, setLoadedSession] = useState<boolean>(false);
  const navigate = useNavigateI18n();
  const initConfigs = useInitConfigs();

  const updateSessionUser = (
    userData: UserConfig,
    providerId: string,
  ): void => {
    const {uid, email, displayName, photoURL, phoneNumber} =
      userData as UserConfig;
    const userConfigObj: UserConfig = {
      uid,
      email,
      displayName,
      photoURL,
      phoneNumber,
      authMethod: providerId.includes('phone')
        ? AuthMethods.PHONE
        : AuthMethods.EMAIL,
    };
    setUserConfig(prev => ({...prev, ...userConfigObj}));
  };

  const cleanData = (): void => {
    cookie.remove(USER_DATA_KEY);
    localStorage.clear();
    sessionStorage.clear();
    setSessionStarted(false);
    setLoadedSession(false);
    setIsAuthReady(false);
    setUser(undefined);
    setUserConfig(undefined);
    LogProvider.getInstance().removeUser();
  };

  const logOut = async (
    routeToRedirect?: ROUTES,
    message?: string,
  ): Promise<void> => {
    await signOut(auth);
    cleanData();
    navigate(routeToRedirect || ROUTES.LOGIN, {
      replace: true,
      state: message ? {alertLogOut: message} : undefined,
    });
  };

  const googleSignIn = (): void => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    try {
      signInWithPopup(auth, provider);
    } catch (error) {
      sessionStorage.removeItem(USER_CONFIG_KEY);
    }
  };

  const getTokenFromJwt = async (token: string): Promise<void> => {
    try {
      await signInWithCustomToken(auth, token);
    } catch (error) {
      sessionStorage.removeItem(USER_CONFIG_KEY);
    }
  };

  const isLoggedIn = (): boolean => {
    const firebaseUser = auth.currentUser;
    return firebaseUser ? true : false;
  };

  useEffect(() => {
    if (userConfig?.uid) {
      persistUserConfig(userConfig);
      initConfigs.setUser(userConfig, user?.id);
    }
  }, [user, userConfig]);

  useEffect(() => {
    if (!loadedSession && user) {
      setLoadedSession(true);
    }
  }, [loadedSession, user]);

  useEffect(() => {
    if (auth.currentUser) {
      const sessionDate = localStorage.getItem('expire-time');
      if (sessionDate) {
        if (isAfterOneWeekUtc(Number(sessionDate))) {
          logOut();
        }
      } else {
        localStorage.setItem('expire-time', String(getDateUtc()));
      }
    }
  }, [isAuthReady]);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const [provider] = user.providerData;
        // if (provider.providerId.includes('phone') !== true) {
        //   const msgResponse = await userService.validateUser(user?.uid);
        //   if (msgResponse) {
        //     logOut(ROUTES.LOGIN, msgResponse);
        //     return;
        //   }
        // }
        updateSessionUser(user as UserConfig, provider.providerId);
        setSessionStarted(true);
      }
      setIsAuthReady(true);
    });
  }, []);

  const value: AuthContextType = {
    userConfig,
    setUserConfig,
    user,
    setUser,
    googleSignIn,
    getTokenFromJwt,
    logOut,
    setLoadedSession,
    loadedSession,
    sessionStarted,
    isAuthReady,
    isLoggedIn,
    cleanData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
