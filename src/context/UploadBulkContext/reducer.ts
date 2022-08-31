import {Reducer} from 'react';

import {Action, State} from './types';

export const initialState: State = {
  step: 0,
  isValid: false,
  files: [],
  status: 'normal',
  products: [],
  error: '',
  productsRepeated: 0,
  nonexistentCategories: [],
  duplicateStrategy: null,
};

const moduleName = 'bulk_upload';

export const ACTIONS = {
  SET_IS_VALID: `${moduleName}/set_is_valid`,
  UPLOAD_FILE_RESET: `${moduleName}/file_reset`,
  UPLOAD_FILE_SUCCESS: `${moduleName}/file_success`,
  UPLOAD_FILE_ERROR: `${moduleName}/file_error`,
  SET_DUPLICATE_SETTING: `${moduleName}/set_duplicate_setting`,
  UPLOAD_PRODUCTSREPEATED: `${moduleName}/set_products_repeated`,
  CLEAN_STATE: `${moduleName}/clean_state`,
};

// eslint-disable-next-line complexity
export const reducer: Reducer<State, Action> = (state, action): State => {
  const {type, payload} = action;
  switch (type) {
    case ACTIONS.SET_IS_VALID:
      return {
        ...state,
        isValid: payload,
      };
    case ACTIONS.UPLOAD_FILE_RESET:
      return initialState;
    case ACTIONS.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        files: [payload.file],
        status: 'success',
        isValid: false,
      };
    case ACTIONS.UPLOAD_FILE_ERROR:
      return {
        ...state,
        products: [],
        status: 'error',
        error: payload.error,
        productsRepeated: 0,
        isValid: false,
      };
    case ACTIONS.SET_DUPLICATE_SETTING:
      return {
        ...state,
        duplicateStrategy: payload.option,
        isValid: !!payload.option,
      };
    case ACTIONS.UPLOAD_PRODUCTSREPEATED:
      return {
        ...state,
        productsRepeated: payload.productsRepeated,
      };
    case ACTIONS.CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};
