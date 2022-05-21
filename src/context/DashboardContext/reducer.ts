/* eslint-disable complexity */
import {Reducer} from 'react';

const moduleName = 'dashboard';

import {State, Action} from './types';

export const ACTIONS = {
  RIGHT_BAR_OPEN: `${moduleName}/right_bar_open`,
  RIGHT_BAR_CLOSE: `${moduleName}/right_bar_close`,
  SET_SEARCH: `${moduleName}/set_search`,
  SET_PARAMS: `${moduleName}/set_params`,
  SET_SCREENS: `${moduleName}/set_screens`,
  SET_FILTERS: `${moduleName}/set_filters`,
  RIGHT_BAR_NAVIGATE: `${moduleName}/right_bar_navigate`,
  LOADING_FILE_REPORT: `${moduleName}/loading_file_report`,
};

export const initialState: State = {
  rightBarOpen: false,
  search: '',
  screens: [],
  filters: {},
  params: {actions: []},
  isUpdateNeeded: false,
  isLoadingReportFile: false,
};

export const reducer: Reducer<State, Action> = (state, action): State => {
  const {type, payload} = action;
  switch (type) {
    case ACTIONS.RIGHT_BAR_OPEN:
      return {
        ...state,
        rightBarOpen: true,
      };
    case ACTIONS.RIGHT_BAR_CLOSE:
      return {
        ...state,
        rightBarOpen: false,
        screens: [],
        params: {},
      };
    case ACTIONS.RIGHT_BAR_NAVIGATE:
      return {
        ...state,
        rightBarOpen: true,
        screens: [...state.screens, payload.route],
        params: {
          ...state.params,
          ...payload.params,
        },
      };
    case ACTIONS.SET_SEARCH:
      return {
        ...state,
        search: payload.search,
      };
    case ACTIONS.SET_FILTERS:
      return {
        ...state,
        filters: payload.filters,
      };
    case ACTIONS.SET_SCREENS:
      return {
        ...state,
        screens: payload <= 0 ? 0 : payload,
      };
    case ACTIONS.SET_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...payload.params,
        },
      };
    case ACTIONS.LOADING_FILE_REPORT:
      return {
        ...state,
        isLoadingReportFile: payload,
      };
    default:
      return state;
  }
};
