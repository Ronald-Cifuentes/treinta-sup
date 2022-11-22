import {Reducer} from 'react';
import {Action, State, VerifyResponseError} from './types';

export const initialState: State = {
  states: [],
  status: 'normal',
  files: [],
  isValid: false,
  error: {} as VerifyResponseError,
  statesRepeated: 0,
};

const moduleName = 'order_bulk_update';

export const ACTIONS = {
  UPLOAD_FILE_RESET: `${moduleName}/file_reset`,
  UPLOAD_FILE_SUCCESS: `${moduleName}/file_success`,
  SET_IS_VALID: `${moduleName}/set_is_valid`,
  UPLOAD_FILE_ERROR: `${moduleName}/file_error`,
};

export const reducer: Reducer<State, Action> = (
  state,
  {type, payload},
): State => {
  switch (type) {
    case ACTIONS.SET_IS_VALID:
      return {
        ...state,
        isValid: payload?.isValid || false,
      };
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
    default:
      return state;
  }
};
