import {Reducer} from 'react';
import {Action, State, VerifyResponseError} from './types';

export const initialState: State = {
  states: [],
  status: 'normal',
  files: [],
  isValid: false,
  error: {} as VerifyResponseError,
  statesRepeated: 0,
  step: 0,
};

const moduleName = 'order_bulk_update';

export const ACTIONS = {
  UPLOAD_FILE_RESET: `${moduleName}/file_reset`,
  UPLOAD_FILE_SUCCESS: `${moduleName}/file_success`,
  UPLOAD_FILE_ERROR: `${moduleName}/file_error`,
  SET_IS_VALID: `${moduleName}/set_is_valid`,
  SET_STEP: `${moduleName}/set_step`,
};

export const reducer: Reducer<State, Action> = (
  state,
  {type, payload},
): State => {
  switch (type) {
    case ACTIONS.UPLOAD_FILE_RESET:
      return initialState;
    case ACTIONS.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        files: [payload?.file] as File[],
        status: 'success',
        isValid: false,
      };
    case ACTIONS.UPLOAD_FILE_ERROR:
      return {
        ...state,
        ...payload?.error,
        status: 'error',
        states: [],
        statesRepeated: 0,
        isValid: false,
      };
    case ACTIONS.SET_IS_VALID:
      return {
        ...state,
        isValid: payload?.isValid || false,
      };
    case ACTIONS.SET_STEP:
      return {
        ...state,
        step: payload?.step || 0,
      };
    default:
      return state;
  }
};
