import {lazy} from 'react';
import {DownloadOrders} from 'modules/Dashboard/Orders/components/organisms/DownloadOrders';
import {OrderDetail} from 'modules/Dashboard/Orders/components/organisms/OrderDetail';
import {InventoryList} from 'modules/Dashboard/Orders/components/organisms/InventoryList';
import {InventoryDetail} from 'modules/Dashboard/Orders/components/organisms/InventoryDetail';
import {InventoryBulkLoad} from 'modules/Dashboard/Orders/components/organisms/InventoryBulkLoad';
import {InventoryBulkLoadError} from 'modules/Dashboard/Orders/components/organisms/InventoryBulkLoad/components/molecules/InventoryBulkLoadError';
import {InventoryBulkLoadSuccess} from 'modules/Dashboard/Orders/components/organisms/InventoryBulkLoad/components/molecules/InventoryBulkLoadSuccess';
import {Route, ROUTES} from './types';
import {PrivateRoute} from './PrivateRoute/PrivateRoute';

const Orders = lazy(() => import('../modules/Dashboard/Orders'));
const SignIn = lazy(() => import('../modules/Login/SignInGoogle'));

const NotFound = lazy(() => import('../modules/NotFound'));

const controlAccess = (getI18nRoute: (arg0: ROUTES) => unknown): Route[] => {
  if (process.env.REACT_APP_SHOW_BULK_LOAD == 'true') {
    return [
      {
        path: `${getI18nRoute(ROUTES.INVENTORY)}/bulkload`,
        element: <InventoryBulkLoad />,
        isPrivate: true,
      },
      {
        path: `${getI18nRoute(ROUTES.INVENTORY)}/bulkload/error`,
        element: <InventoryBulkLoadError />,
        isPrivate: true,
      },
      {
        path: `${getI18nRoute(ROUTES.INVENTORY)}/bulkload/success`,
        element: <InventoryBulkLoadSuccess />,
        isPrivate: true,
      },
    ];
  } else {
    return [{}];
  }
};

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
    path: getI18nRoute(ROUTES.REPORTS),
    element: <DownloadOrders />,
    isPrivate: true,
  },
  ...controlAccess(getI18nRoute),
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
