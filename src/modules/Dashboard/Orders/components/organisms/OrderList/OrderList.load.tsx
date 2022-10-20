import {FC, useEffect} from 'react';

import {ROUTES} from 'routes/types';
import {Permissions} from 'config/constants';
import {useAuthorization, useNavigateI18n} from 'hooks';

import {OrderList} from './OrderList';

export const OrdersLoad: FC = () => {
  const isAllowed = useAuthorization(Permissions.ORDERS_ALL);
  const navigate = useNavigateI18n();

  /* eslint-disable */
  useEffect(() => {
    if (!isAllowed) {
      navigate(ROUTES.ORDERS);
    }
  }, []);
  return <OrderList />;
};
