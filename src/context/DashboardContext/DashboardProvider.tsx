import logger from 'use-reducer-logger';
import {Backdrop} from '@30sas/web-ui-kit-core';
import {FC, useMemo, useReducer} from 'react';

import {useLoadUserData} from 'hooks';
import {
  Screens,
  ToastLocations,
  RightBarScreensContacts,
} from 'config/constants';
import {useAuth} from 'context/AuthContext';
import {useToast} from 'context/ToastContext';

import {State, Action, ParamsTypes, DashboardContextType} from './types';
import {DashboardContext} from './DashboardContext';
import {initialState, reducer, ACTIONS} from './reducer';

export const DashboardProvider: FC = ({children}) => {
  const {user, userConfig, sessionStarted, loadedSession} = useAuth();
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    logger(reducer),
    initialState,
  );
  const {
    open: toastOpen,
    setOpen: setToastOpen,
    location: toastLocation,
  } = useToast();
  // useLoadUserData();

  const loading = useMemo(
    () =>
      (!user || !loadedSession) &&
      sessionStarted &&
      !userConfig?.showOnBoarding,
    [user, userConfig, loadedSession, sessionStarted],
  );

  const setParams = (params?: ParamsTypes): void => {
    dispatch({type: ACTIONS.SET_PARAMS, payload: {params}});
  };

  const setScreens = (screens: Screens[]): void => {
    dispatch({type: ACTIONS.SET_SCREENS, payload: screens});
  };

  const setLoadingReportFileDownload = (value: boolean): void => {
    dispatch({type: ACTIONS.LOADING_FILE_REPORT, payload: value});
  };

  const setSearch = (search: string): void => {
    dispatch({type: ACTIONS.SET_SEARCH, payload: search});
  };

  const setFilters = (filters: Record<string, unknown>): void => {
    dispatch({type: ACTIONS.SET_FILTERS, payload: {filters}});
  };

  const setRightBarOpen = (rightBarOpen: boolean): void => {
    if (rightBarOpen) {
      dispatch({type: ACTIONS.RIGHT_BAR_OPEN});
    } else {
      dispatch({type: ACTIONS.RIGHT_BAR_CLOSE});
      if (toastOpen && toastLocation === ToastLocations.RIGHTBAR) {
        setToastOpen(false);
      }
    }
  };

  const canGoBack = (): boolean => state.screens.length > 1;

  const goBack = (params?: ParamsTypes): void => {
    if (canGoBack()) {
      const newScreens = state.screens.slice(0, -1);
      const currentScreen = state.screens[state.screens.length - 1];
      setScreens(newScreens);
      if (
        currentScreen != RightBarScreensContacts.CONFIRM_EXIT &&
        currentScreen != RightBarScreensContacts.CONFIRM_DELETE_CONTACT
      ) {
        setParams({});
      }
    }
    if (params) {
      setParams(params);
    } else {
      setParams({actions: []});
    }
  };

  const navigate = (route: Screens, params?: ParamsTypes): void => {
    dispatch({
      type: ACTIONS.RIGHT_BAR_NAVIGATE,
      payload: {
        route,
        params,
      },
    });
  };

  const value: DashboardContextType = {
    ...state,
    loading,
    isLoadingReportFile: state.isLoadingReportFile,
    setRightBarOpen,
    setLoadingReportFileDownload,
    dispatch,
    setSearch,
    setParams,
    setFilters,
    rightBarNavigation: {
      canGoBack,
      navigate,
      goBack,
    },
  };

  return (
    <DashboardContext.Provider value={value}>
      <Backdrop open={false} />
      {children}
    </DashboardContext.Provider>
  );
};
