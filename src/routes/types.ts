import {RouteObject} from 'react-router-dom';

export enum ROUTES {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  ORDERS = 'ORDERS',
  INVENTORY = 'INVENTORY',
}

export enum RoutesSpanish {
  HOME = '/',
  LOGIN = '/ingresar',
  ORDERS = '/ordenes',
  INVENTORY = '/inventario',
}

export enum RoutesPortuguese {
  HOME = '/',
  LOGIN = '/login',
  ORDERS = '/ordenes',
  INVENTORY = '/inventario',
}

export const ROUTES_MAP = {
  es: RoutesSpanish,
  pt: RoutesPortuguese,
};

export interface Route extends RouteObject {
  isPrivate?: boolean;
}
