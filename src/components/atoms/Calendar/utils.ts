import esLocale from 'date-fns/locale/es';
import enLocale from 'date-fns/locale/en-US';

import elLocale from 'date-fns/locale/el';
import ptLocale from 'date-fns/locale/pt';
import {format} from 'date-fns';

export const LOCALE_MAP = {
  en: enLocale,
  el: elLocale,
  es: esLocale,
  pt: ptLocale,
};

export function handleDateFormatter(
  firstValue: Date,
  secondValue: Date,
  locale: keyof typeof LOCALE_MAP,
): string {
  return (
    format(firstValue, 'd MMM', {locale: LOCALE_MAP[locale]}) +
    ' | ' +
    format(secondValue, 'd MMM', {locale: LOCALE_MAP[locale]})
  );
}
