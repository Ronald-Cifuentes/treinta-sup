import 'dayjs/locale/es';
import 'dayjs/locale/pt';
import dayjs from 'dayjs';
import i18n from 'i18next';
import utc from 'dayjs/plugin/utc';
import LanguageDetector, {
  CustomDetector,
} from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';

import {es, pt} from 'config/locales';
import {Languages} from 'config/constants';

const initializeDayjs = (): void => {
  dayjs.locale(i18n.language);
  dayjs.extend(utc);
};

export class I18nProvider {
  private static instance: I18nProvider;

  static getInstance(): I18nProvider {
    if (!I18nProvider.instance) {
      I18nProvider.instance = new I18nProvider();
    }
    return this.instance;
  }

  setLanguage(language: Languages): void {
    i18n.changeLanguage(language);
  }

  getLanguageDetectorConfig(): LanguageDetector {
    const languageDetector = new LanguageDetector();
    const detector: CustomDetector = {
      name: 'treinta-web-detector',
      lookup() {
        const ptDomain = process.env.REACT_APP_PT_DOMAIN || '';
        if (ptDomain && window.location.hostname.includes(ptDomain)) {
          return Languages.PT;
        }
        return Languages.ES;
      },
    };
    languageDetector.addDetector(detector);
    return languageDetector;
  }

  async initProvider(): Promise<void> {
    await i18n
      .use(initReactI18next)
      .use(this.getLanguageDetectorConfig())
      .init({
        resources: {
          [Languages.ES]: {translation: es},
          [Languages.PT]: {translation: pt},
        },
        fallbackLng: 'es',
        initImmediate: true,
        interpolation: {
          escapeValue: false,
        },
        detection: {order: ['treinta-web-detector']},
      });
    initializeDayjs();
  }
}
