import {FC, Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import {Backdrop} from '@30sas/web-ui-kit-core';

import Maintenance from 'modules/Maintenance';
import {useRoutes as useRoutesCustom} from 'hooks';

import {getFormattedRoutes} from './routes';

export const Routes: FC = () => {
  const clientStateOn = false;
  const {getI18nRoute} = useRoutesCustom();
  const element = useRoutes(getFormattedRoutes(getI18nRoute));

  return (
    <Suspense fallback={<Backdrop open={true} />}>
      {clientStateOn ? <Maintenance /> : element}
    </Suspense>
  );
};