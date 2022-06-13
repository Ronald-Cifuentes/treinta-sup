import {FC, MouseEventHandler} from 'react';
import {ColorTypesTag} from '@30sas/web-ui-kit-core';
import {Column} from '@30sas/web-ui-kit-core/dist/components/atoms/Table/types';
import {createData} from './Functions';

export interface Columns extends Omit<Column, 'id'> {
  id: string;
}

export interface Rows {
  id: number | string | JSX.Element;
  state?:
    | {status?: string; variant?: ColorTypesTag}
    | number
    | string
    | JSX.Element;
  client?: number | string | JSX.Element;
  phone?: number | string | JSX.Element;
  creationDate?: number | string | JSX.Element;
  updateDate?: number | string | JSX.Element;
  deliveryDate?: number | string | JSX.Element;
  value?: number | number | string | JSX.Element;
  detail?: number | string | JSX.Element;
}

export const columnsOne: Array<Columns> = [
  {id: 'id', label: 'ID', minWidth: 100},
];

export const rowsOneSimple: Array<Rows> = [{id: 'X123@_-}+1¿'}];

export const columns: Array<Columns> = [
  {id: 'id', label: 'ID', minWidth: 100},
  {id: 'state', label: 'Estado', minWidth: 100},
  {id: 'client', label: 'Cliente', minWidth: 100},
  {id: 'phone', label: 'Teléfono', minWidth: 100},
  {id: 'creationDate', label: 'Fecha de creación', minWidth: 100},
  {id: 'updateDate', label: 'Fecha actualizada', minWidth: 100},
  {id: 'deliveryDate', label: 'Fecha de entrega', minWidth: 100},
  {id: 'value', label: 'Valor', minWidth: 100},
  {id: 'detail', label: '', minWidth: 100},
];

export const rowsSimple: Array<Rows> = [
  {
    id: 'A16234',
    state: 'Testing',
    client: 'Carlos Perez',
    phone: '3015918524',
    creationDate: '04/05/2022',
    updateDate: '04/05/2022',
    deliveryDate: '04/05/2022',
    value: 1500.5,
    detail: 'https://www.google.com',
  },
  {
    id: 'A16234',
    state: 'Testing_2',
    client: 'Carlos Perez',
    phone: '3015918524',
    creationDate: '04/05/2022',
    updateDate: '04/05/2022',
    deliveryDate: '04/05/2022',
    value: 1500.5,
    detail: 'https://www.google.com',
  },
];

export const rowsWithComponents: Array<Rows> = [
  createData(
    'A16234',
    {status: 'Recibido', variant: 'warning'},
    'Carlos Perez',
    '3015918524',
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
    'https://www.google.com',
  ),
  createData(
    'A16234',
    {status: 'Confirmado', variant: 'info'},
    'Carlos Perez',
    '3015918524',
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
    'https://www.google.com',
  ),
  createData(
    'A16234',
    {status: 'En ruta', variant: 'success'},
    'Carlos Perez',
    '3015918524',
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
    'https://www.google.com',
  ),
  createData(
    'A16234',
    {status: 'Entregado', variant: 'success'},
    'Carlos Perez',
    '3015918524',
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
    'https://www.google.com',
  ),
  createData(
    'A16234',
    {status: 'Cancelado', variant: 'error'},
    'Carlos Perez',
    '3015918524',
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
    'https://www.google.com',
  ),
  createData(
    'A16234',
    {status: 'Devuelto', variant: 'error'},
    'Carlos Perez',
    '3015918524',
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
    'https://www.google.com',
  ),
  createData(
    'A16234',
    {status: 'Preprogramado', variant: 'info'},
    'Carlos Perez',
    '3015918524',
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
    'https://www.google.com',
  ),
  createData(
    'A16234',
    {status: 'Entregado', variant: 'success'},
    'Carlos Perez',
    '3015918524',
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
    'https://www.google.com',
  ),
];
