import {Reducer} from 'react';
import {ActionCategories, StateCategoriesTypes} from './types';

export const initialState: StateCategoriesTypes = {
  items: [],
};

export const CATEGORIES_ACTIONS = {
  LIST: 'Categories/list',
};

export const reducer: Reducer<StateCategoriesTypes, ActionCategories> = (
  state,
  {type, payload},
): StateCategoriesTypes => {
  switch (type) {
    case CATEGORIES_ACTIONS.LIST:
      return {...state, ...payload};
    default:
      break;
  }
  return state;
};
