import {Country, CountriesIds} from '@30sas/web-ui-kit-utils';

export interface UseCurrencyFormatter {
  country: Country;
  formatter: (value: number) => string;
  countryId: CountriesIds;
}
