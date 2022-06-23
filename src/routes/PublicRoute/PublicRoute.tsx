import {FC, ReactElement, useEffect} from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';

import {useNavigateI18n} from 'hooks';
import {useAuth} from 'context/AuthContext';
import {useIsMobile} from 'hooks/useIsMobile';
import {DASHBOARD_HOME} from 'config/constants';

export const PublicRoute: FC = ({children}) => {
  const {isLoggedIn, userConfig} = useAuth();
  const navigate = useNavigate();
  const navigateI18n = useNavigateI18n();
  useIsMobile();

  const [searchParams] = useSearchParams();
  const backTo = searchParams.get('backTo') as string;

  useEffect(() => {
    const logged = isLoggedIn();
    if (logged) {
      backTo ? navigate(backTo) : navigateI18n(DASHBOARD_HOME);
    }
  }, [userConfig, backTo, navigateI18n, isLoggedIn, navigate]);

  return children as ReactElement;
};
