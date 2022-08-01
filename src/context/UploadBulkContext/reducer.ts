import {Reducer} from 'react';

import {Action, State, ProductWithErrors, PayloadData} from './types';

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
  UPLOAD_FILE_RESET: `${moduleName}/file_reset`,
  UPLOAD_FILE_ERROR: `${moduleName}/file_error`,
  UPLOAD_FILE_SUCCESS: `${moduleName}/file_success`,
  UPLOAD_FILE_SET_PRODUCTS: `${moduleName}/set_products`,
  EDIT_PRODUCT: `${moduleName}/edit_product`,
  REMOVE_PRODUCT: `${moduleName}/remove_product`,
  CLEAN_STATE: `${moduleName}/clean_state`,
  SET_DUPLICATE_SETTING: `${moduleName}/set_duplicate_setting`,
  SET_IS_VALID: `${moduleName}/set_is_valid`,
};

const updateProductsState = (
  products: ProductWithErrors[],
  {option, currentProducts, productsRepeated}: PayloadData,
): ProductWithErrors[] => {
  if (productsRepeated && option === 'add-stock') {
    products?.forEach(product => {
      const productRepeted = currentProducts.find(
        ({name}) =>
          product?.name?.toLocaleLowerCase() === name?.toLocaleLowerCase(),
      );
      if (productRepeted) {
        product.price = productRepeted?.price || 0;
        product.cost = 0;
      }
    });
  }
  return products;
};

const findAndReplace = (
  products: ProductWithErrors[],
  values: ProductWithErrors,
): ProductWithErrors[] =>
  products.map(product => {
    if (product.key === values.key) {
      return {...values, errors: []};
    } else {
      return product;
    }
  });

const remplaceSign = (value: number | string): number =>
  parseFloat(String(value).replace(/\$/g, ''));

const findAndReplaceSigns = (
  products: ProductWithErrors[],
): ProductWithErrors[] => {
  products?.forEach(product => {
    product.cost = remplaceSign(product?.cost || 0);
    product.price = remplaceSign(product?.price || 0);
  });
  return products;
};

const findAndRemove = (
  products: ProductWithErrors[],
  index: number,
): ProductWithErrors[] =>
  products.slice(0, index).concat(products.slice(index + 1));

// eslint-disable-next-line complexity
export const reducer: Reducer<State, Action> = (state, action): State => {
  const {type, payload} = action;
  switch (type) {
    case ACTIONS.SET_IS_VALID:
      return {
        ...state,
        isValid: payload,
      };
    case ACTIONS.UPLOAD_FILE_SET_PRODUCTS:
      return {
        ...state,
        products: findAndReplaceSigns(payload.products),
      };
    case ACTIONS.UPLOAD_FILE_RESET:
      return {
        ...state,
        files: [],
        status: 'normal',
        isValid: false,
      };
    case ACTIONS.UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        files: [payload.file],
        status: 'success',
        isValid: true,
      };
    case ACTIONS.UPLOAD_FILE_ERROR:
      return {
        ...state,
        products: [],
        status: 'error',
        error: payload.error,
        isValid: false,
      };
    case ACTIONS.SET_DUPLICATE_SETTING:
      return {
        ...state,
        duplicateStrategy: payload.option,
        products: updateProductsState(state.products, {
          productsRepeated: state.productsRepeated,
          ...payload,
        }),
        isValid: !!payload.option,
      };
    case ACTIONS.EDIT_PRODUCT:
      return {
        ...state,
        products: findAndReplace(state.products, payload.values),
      };
    case ACTIONS.REMOVE_PRODUCT:
      return {
        ...state,
        products: findAndRemove(state.products, payload.index),
      };
    case ACTIONS.CLEAN_STATE:
      return initialState;
    default:
      return state;
  }
};
