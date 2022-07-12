import {Reducer} from 'react';
import {ActionProductDetail, StateProductDetailTypes} from './types';

export const initialState: StateProductDetailTypes = {
  name: '',
  imgUrl: '',
  sku: '',
  units: 0,
  weight: 0,
  hasAgeRestriction: false,
  description: '',
  categoryName: '',
  measurementType: '',
  warehouseDetails: [],
};

export const PRODUCTDETAIL_ACTIONS = {
  LIST: 'ProductDetail/list',
};

export const reducer: Reducer<StateProductDetailTypes, ActionProductDetail> = (
  state,
  {type, payload},
): StateProductDetailTypes => {
  switch (type) {
    case PRODUCTDETAIL_ACTIONS.LIST:
      return {...state, ...payload};
    default:
      break;
  }
  return state;
};
