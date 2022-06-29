import {Reducer} from 'react';
import {DataDetailTypes} from 'services/models';
import {ActionDetails} from './types';

export const initialState: DataDetailTypes = {
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
    locationId: 0,
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

export const reducer: Reducer<DataDetailTypes, ActionDetails> = (
  state,
  {type, payload},
): DataDetailTypes => {
  switch (type) {
    case DETAILS_ACTIONS.LIST:
      return {...state, ...payload};
    default:
      break;
  }
  return state;
};
