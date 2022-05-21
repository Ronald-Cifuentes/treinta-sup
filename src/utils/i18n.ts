import i18n from 'i18next';

import {LanguagesMap} from 'config/constants';

export const getI18nProperties = (): {timezone: string; locale: string} => ({
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  locale: LanguagesMap[i18n.language].LOCALE,
});
