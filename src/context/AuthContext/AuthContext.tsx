import {createContext, useContext} from 'react';

import {AuthContextType} from './types';

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const useAuth = (): AuthContextType => useContext(AuthContext);
