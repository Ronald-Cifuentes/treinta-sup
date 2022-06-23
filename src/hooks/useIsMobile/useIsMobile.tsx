import parse from 'ua-parser-js';
import {useMemo, useEffect} from 'react';

import {ROUTES} from 'routes/types';
import {useNavigateI18n} from 'hooks';

import {UseIsMobileProps} from './types';

export const useIsMobile = (): UseIsMobileProps => {
  const {device, os} = useMemo(() => parse(navigator.userAgent), []);
  const navigate = useNavigateI18n();

  const getOS = (): string => os.name || 'unknown';

  useEffect(() => {
    if (['mobile', 'tablet'].includes(device.type || 'unknown')) {
      // TODO: navigate to MOBILE route
      return navigate(ROUTES.HOME, {replace: true});
    }
  }, [device.type, navigate]);

  return {
    getOS,
  };
};
