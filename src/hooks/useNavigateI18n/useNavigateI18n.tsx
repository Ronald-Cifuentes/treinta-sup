import {useNavigate, To, NavigateOptions, useLocation} from 'react-router-dom';

import {useRoutes} from 'hooks/useRoutes';

import {UseNavigateI18n} from './types';

export const useNavigateI18n = (): UseNavigateI18n => {
  const navigateReactRouter = useNavigate();
  const location = useLocation();

  const {getI18nRoute} = useRoutes();

  const navigate = (to: To, options?: NavigateOptions): void => {
    let i18nTo;
    if (to && (to as string).includes('?')) {
      const splittedTo = (to as string).split('?');
      i18nTo = `${getI18nRoute(splittedTo[0])}?${splittedTo.slice(1)}`;
    } else {
      i18nTo = getI18nRoute(to);
    }
    navigateReactRouter({pathname: i18nTo, search: location.search}, options);
  };

  return navigate;
};
