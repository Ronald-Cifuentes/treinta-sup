/* eslint-disable complexity */
import {Reducer} from 'react';
import {ResponseVerification} from 'services/suppliers.orders/types';
import {Action, ResponseMassiveSave, State, VerifyResponseError} from './types';

export const initialState: State = {
  states: [],
  status: 'normal',
  files: [],
  isValid: false,
  error: {} as VerifyResponseError,
  statesRepeated: 0,
  step: 0,
  formattedData: [],
  buttonStep: 0,
  responseVerification: {} as ResponseVerification,
  responseMassiveSave: {} as ResponseMassiveSave,
  countResponseMassiveSave: [],
  remainingTasks: 0,
  parametersLoading: {
    totalArray: 0,
    totalTasks: 0,
    numberBatch: 0,
  },
};

const moduleName = 'order_bulk_update';

export const ACTIONS = {
  UPLOAD_FILE_RESET: `${moduleName}/file_reset`,
  UPLOAD_FILE_SUCCESS: `${moduleName}/file_success`,
  UPLOAD_FILE_ERROR: `${moduleName}/file_error`,
  SET_CONTENT: `${moduleName}/set_content`,
  SET_IS_VALID: `${moduleName}/set_is_valid`,
  SET_STEP: `${moduleName}/set_step`,
  FORMATTED_DATA: `${moduleName}/formatted_data`,
  SET_BUTTON_STEP: `${moduleName}/set_button_step`,
  SET_RESPONSE_VERIFICATION: `${moduleName}/set_response_verification`,
  SET_RESPONSE_MASSIVE_SAVE: `${moduleName}/set_response_massive_save`,
  SET_COUNT_RESPONSE_MASSIVE_SAVE: `${moduleName}/set_count_response_massive_save`,
  SET_REMAINING_TASKS: `${moduleName}/set_remainig_tasks`,
  SET_PARAMETERS_LOADING: `${moduleName}/set_parameters_loading`,
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
        status: 'success',
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
    case ACTIONS.SET_CONTENT:
      return {
        ...state,
        files: [payload?.file] as File[],
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
    case ACTIONS.FORMATTED_DATA:
      return {
        ...state,
        formattedData: payload?.formattedData || [],
      };
    case ACTIONS.SET_BUTTON_STEP:
      return {
        ...state,
        buttonStep: payload?.buttonStep || 0,
      };
    case ACTIONS.SET_RESPONSE_VERIFICATION:
      return {
        ...state,
        responseVerification: payload?.responseVerification || {
          success: [],
          errors: [],
        },
      };
    case ACTIONS.SET_RESPONSE_MASSIVE_SAVE:
      return {
        ...state,
        responseMassiveSave: {...payload?.responseMassiveSave},
      };
    case ACTIONS.SET_COUNT_RESPONSE_MASSIVE_SAVE:
      return {
        ...state,
        countResponseMassiveSave: payload?.countResponseMassiveSave || [],
      };
    case ACTIONS.SET_REMAINING_TASKS:
      return {
        ...state,
        remainingTasks: payload?.remainingTasks || 0,
      };
    case ACTIONS.SET_PARAMETERS_LOADING:
      return {
        ...state,
        parametersLoading: {
          totalArray: payload?.parametersLoading?.totalArray || 0,
          totalTasks: payload?.parametersLoading?.totalTasks || 0,
          numberBatch: payload?.parametersLoading?.numberBatch || 0,
        },
      };
    default:
      return state;
  }
};
