/* eslint-disable @typescript-eslint/no-explicit-any */
import {useLocation} from 'react-router-dom';
import {Backdrop} from '@30sas/web-ui-kit-core';
import {FC, ReactElement, useEffect} from 'react';

import {ROUTES} from 'routes/types';
import {useAuth} from 'context/AuthContext';
import {useIsMobile} from 'hooks/useIsMobile';
import {useRoutes, useNavigateI18n} from 'hooks';


export const PrivateRoute: FC = ({children}) => {
  const {isAuthReady, isLoggedIn, userConfig} = useAuth();
  const navigate = useNavigateI18n();
  useIsMobile();
  const {pathname, state} = useLocation();
  const showOnBoardingState: any = state;
  const {getI18nRoute} = useRoutes();

  useEffect(() => {
    const logged = isLoggedIn();
    if (!logged && isAuthReady) {
      navigate(`${ROUTES.LOGIN}?backTo=${pathname}`);
    }
    if (
      userConfig?.showOnBoarding &&
      !pathname.includes(getI18nRoute(ROUTES.HOME)) &&
      !showOnBoardingState?.showOnBoarding
    ) {
      navigate(ROUTES.HOME);
    }
  }, [isAuthReady]);

  if (!isAuthReady) {
    return <Backdrop open={true} />;
  }

  return children as ReactElement;
};
