import {createContext, useContext} from 'react';

import {DashboardContextType} from './types';

export const DashboardContext = createContext<DashboardContextType>(
  {} as DashboardContextType,
);
export const useDashboard = (): DashboardContextType =>
  useContext(DashboardContext);
