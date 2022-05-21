import {useTranslation} from 'react-i18next';

import {ROUTES_MAP} from 'routes/types';

import {UseRoutes} from './types';

export const useRoutes = (): UseRoutes => {
  const {i18n} = useTranslation();

  const getI18nRoute = (route): string => ROUTES_MAP[i18n.language][route];

  return {getI18nRoute};
};
