import {useTranslation} from 'react-i18next';

import {Languages} from 'config/constants';
import {renderHook} from '__tests__/test-utils';
import {ROUTES, RoutesSpanish, RoutesPortuguese} from 'routes/types';

import {useRoutes} from './useRoutes';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

describe('useRoutes', () => {
  it('Should return spanish route correctly', () => {
    (useTranslation as jest.Mock).mockImplementation(() => ({
      i18n: {language: Languages.ES},
    }));
    const {result} = renderHook(() => useRoutes());
    expect(result.current.getI18nRoute(ROUTES.LOGIN)).toBe(RoutesSpanish.LOGIN);
  });
  it('Should return portuguese route correctly', () => {
    (useTranslation as jest.Mock).mockImplementation(() => ({
      i18n: {language: Languages.PT},
    }));
    const {result} = renderHook(() => useRoutes());
    expect(result.current.getI18nRoute(ROUTES.LOGIN)).toBe(
      RoutesPortuguese.LOGIN,
    );
  });
});
