import {DownloadOrders} from 'modules/Dashboard/Orders/components/organisms/DownloadOrders';
import {InventoryBulkLoad} from 'modules/Dashboard/Orders/components/organisms/InventoryBulkLoad';
import {InventoryBulkLoadError} from 'modules/Dashboard/Orders/components/organisms/InventoryBulkLoad/components/molecules/InventoryBulkLoadError';
import {InventoryBulkLoadSuccess} from 'modules/Dashboard/Orders/components/organisms/InventoryBulkLoad/components/molecules/InventoryBulkLoadSuccess';
import {InventoryDetail} from 'modules/Dashboard/Orders/components/organisms/InventoryDetail';
import {InventoryList} from 'modules/Dashboard/Orders/components/organisms/InventoryList';
import {OrderBulkUpdate} from 'modules/Dashboard/Orders/components/organisms/OrderBulkUpdate';
import {OrderBulkUpdateError} from 'modules/Dashboard/Orders/components/organisms/OrderBulkUpdate/components/molecules/OrderBulkUpdateError';
import {OrderBulkUpdateSuccess} from 'modules/Dashboard/Orders/components/organisms/OrderBulkUpdate/components/molecules/OrderBulkUpdateSuccess';
import {OrderDetail} from 'modules/Dashboard/Orders/components/organisms/OrderDetail';
import {lazy} from 'react';
import {PrivateRoute} from './PrivateRoute/PrivateRoute';
import {Route, ROUTES} from './types';

const Orders = lazy(() => import('../modules/Dashboard/Orders'));
const SignIn = lazy(() => import('../modules/Login/SignInGoogle'));

const NotFound = lazy(() => import('../modules/NotFound'));

const controlAccess = (getI18nRoute: (arg0: ROUTES) => unknown): Route[] => [
  ...(process.env.REACT_APP_SHOW_BULK_LOAD == 'true'
    ? [
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
      ]
    : [{}]),
  ...(process.env.REACT_APP_ORDERS_UPDATE == 'true'
    ? [
        {
          path: `${getI18nRoute(ROUTES.ORDERS)}/actualizar`,
          element: <OrderBulkUpdate />,
          isPrivate: true,
        },
        // TODO: ES NECESARIO REMOVER ESTA RUTA CUANDO EL ESTEN LISTAS LAS ACCIONES QUE ACCEDEN A ESTAS PAGINAS PUES SE REQUIERE QUE EL CONTENIDO SEA DINAMICO
        {
          path: `${getI18nRoute(ROUTES.ORDERS)}/actualizar/error`,
          element: <OrderBulkUpdateError />,
          isPrivate: true,
        },
        // TODO: ES NECESARIO REMOVER ESTA RUTA CUANDO EL ESTEN LISTAS LAS ACCIONES QUE ACCEDEN A ESTAS PAGINAS PUES SE REQUIERE QUE EL CONTENIDO SEA DINAMICO
        {
          path: `${getI18nRoute(ROUTES.ORDERS)}/actualizar/success`,
          element: <OrderBulkUpdateSuccess />,
          isPrivate: true,
        },
      ]
    : [{}]),
];

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
