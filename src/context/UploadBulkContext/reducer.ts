import {Reducer} from 'react';
import {DataVerify, VerifyResponseError} from 'services/models';

import {Action, State, UploadBulkContextError} from './types';

export const initialState: State = {
  step: 0,
  isValid: false,
  files: [],
  status: 'normal',
  products: [],
  error: [],
  productsRepeated: 0,
  nonexistentCategories: [],
  duplicateStrategy: null,
  buttonStep: 0,
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
  UPLOAD_COMPLETED: `${moduleName}/upload_completed`,
  REMOVE_PRODUCT: `${moduleName}/remove_product`,
  SET_STACK_ERROR: `${moduleName}/set_stack_error`,
  SET_BTN_STEP: `${moduleName}/set_btn_step`,
  SET_STEP: `${moduleName}/set_step`,
  UPLOAD_IMAGE: `${moduleName}/upload_image`,
  REMOVE_IMAGE: `${moduleName}/remove_image`,
};

const findAndRemoveItem = (
  products: DataVerify[],
  index: number,
): DataVerify[] => products.slice(0, index).concat(products.slice(index + 1));

const findAndRemoveError = (
  errors: UploadBulkContextError,
  index: number,
): UploadBulkContextError =>
  errors.slice(0, index).concat(errors.slice(index + 1));

const formatError = (error: VerifyResponseError): string[][] => {
  const tmpArray: string[][] = [[]];
  if (typeof error.message == 'object') {
    error.message?.forEach(x => {
      const ind = parseInt(x.split('.')[1]);
      if (typeof tmpArray[ind] == 'undefined') {
        tmpArray[ind] = [];
      }
      tmpArray[ind]?.push(x.split('.')[2]);
    });
  }

  return tmpArray;
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
    case ACTIONS.UPLOAD_COMPLETED:
      return {
        ...state,
        products: payload.products,
      };
    case ACTIONS.REMOVE_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const products: DataVerify[] = findAndRemoveItem(
        state.products,
        payload.index,
      );
      // eslint-disable-next-line no-case-declarations
      const error = findAndRemoveError(state.error, payload.index);
      return {
        ...state,
        products,
        error,
      };
    case ACTIONS.SET_STACK_ERROR:
      return {
        ...state,
        error: formatError(payload.error),
      };
    case ACTIONS.SET_BTN_STEP:
      return {
        ...state,
        buttonStep: payload.buttonStep,
      };
    case ACTIONS.SET_STEP:
      return {
        ...state,
        step: payload.step,
      };
    case ACTIONS.UPLOAD_IMAGE:
      return {
        ...state,
        products: state.products.map((product, ind) =>
          ind == payload.id
            ? {
                ...product,
                productThumbImgUrl: payload.url,
              }
            : product,
        ),
      };
    case ACTIONS.REMOVE_IMAGE:
      delete state.products[payload.index].productThumbImgUrl;
      return {...state};
    case ACTIONS.CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};
