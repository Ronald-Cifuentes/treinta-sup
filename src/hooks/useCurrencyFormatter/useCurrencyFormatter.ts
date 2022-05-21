import {
  getCountry,
  CountriesIds,
  formatterCurrency,
} from '@30sas/web-ui-kit-utils';
import {useMemo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';

import {LanguagesMap} from 'config/constants';
import {useAuth} from 'context/AuthContext/AuthContext';

import {UseCurrencyFormatter} from './types';

export const useCurrencyFormatter = (): UseCurrencyFormatter => {
  const {user} = useAuth();
  const {i18n} = useTranslation();

  const country = useMemo(
    () =>
      getCountry(
        (user?.countryId as CountriesIds) ||
          LanguagesMap[i18n?.language]?.COUNTRY_ID,
      ),
    [user, i18n.language],
  );

  const formatter = useCallback(
    (value: number): string => formatterCurrency(country, value),
    [country],
  );

  const countryId: CountriesIds = useMemo(
    () => country.id as CountriesIds,
    [country],
  );

  return {formatter, country, countryId};
};
