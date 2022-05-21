import {ROUTES} from 'routes/types';
import {User, UserConfig} from 'services/models';

export interface AuthContextType {
  userConfig?: UserConfig;
  setUserConfig: React.Dispatch<React.SetStateAction<UserConfig | undefined>>;
  user?: User;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  googleSignIn: () => void;
  getTokenFromJwt: (token: string) => Promise<void>;
  logOut: (routeToRedirect?: ROUTES, message?: string) => Promise<void>;
  isLoggedIn: () => boolean;
  isAuthReady: boolean;
  sessionStarted: boolean;
  loadedSession: boolean;
  cleanData: () => void;
  setLoadedSession: React.Dispatch<React.SetStateAction<boolean>>;
}
