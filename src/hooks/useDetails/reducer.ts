import {Reducer} from 'react';
import {Detail} from 'services/models';
import {ActionDetails} from './types';

export const initialState: Detail = {
  id: '',
  externalId: null,
  value: 0,
  appliedDiscount: 0,
  productsValue: 0,
  phone: '',
  comments: '',
  createdAt: '',
  updatedAt: '',
  deliveryDate: '',
  status: {id: 0, name: ''},
  customer: {
    name: '',
    lastName: '',
    document: '',
    email: '',
    documentType: '',
    documentTypeId: 0,
  },
  location: {
    id: 0,
    name: '',
    address: '',
    additionalInformation: '',
    contactPhone: '',
  },
  products: [],
};

export const DETAILS_ACTIONS = {
  LIST: 'Details/list',
};

export const reducer: Reducer<Detail, ActionDetails> = (
  state,
  {type, payload},
): Detail => {
  switch (type) {
    case DETAILS_ACTIONS.LIST:
      return {...state, ...payload};
    default:
      break;
  }
  return state;
};
