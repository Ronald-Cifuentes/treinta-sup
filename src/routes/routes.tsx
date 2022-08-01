import {lazy} from 'react';

import {InventoryBulkLoad} from 'modules/Dashboard/Orders/components/organisms/InventoryBulkLoad';
import {InventoryDetail} from 'modules/Dashboard/Orders/components/organisms/InventoryDetail';
import {InventoryList} from 'modules/Dashboard/Orders/components/organisms/InventoryList';
import {OrderDetail} from 'modules/Dashboard/Orders/components/organisms/OrderDetail';
import {PrivateRoute} from './PrivateRoute/PrivateRoute';
import {Route, ROUTES} from './types';

const Orders = lazy(() => import('../modules/Dashboard/Orders'));
const SignIn = lazy(() => import('../modules/Login/SignInGoogle'));

const NotFound = lazy(() => import('../modules/NotFound'));

const getRoutes = (getI18nRoute): Route[] => [
  {
    path: getI18nRoute(ROUTES.LOGIN),
    element: <SignIn />,
  },
  {
    path: getI18nRoute(ROUTES.ORDERS),
    element: <Orders />,
    isPrivate: true,
  },
  {
    path: `${getI18nRoute(ROUTES.ORDERS)}/:id`,
    element: <OrderDetail />,
    isPrivate: true,
  },
  {
    path: getI18nRoute(ROUTES.INVENTORY),
    element: <InventoryList />,
    isPrivate: true,
  },
  {
    path: `${getI18nRoute(ROUTES.INVENTORY)}/:id`,
    element: <InventoryDetail />,
    isPrivate: true,
  },
  {
    path: `${getI18nRoute(ROUTES.INVENTORY)}/bulkload`,
    element: <InventoryBulkLoad />,
    isPrivate: true,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const getFormattedRoutes = (getI18nRoute): Route[] =>
  getRoutes(getI18nRoute).map(route => ({
    ...route,
    element: route.isPrivate ? (
      <PrivateRoute>{route.element}</PrivateRoute>
    ) : (
      route.element
    ),
  }));
