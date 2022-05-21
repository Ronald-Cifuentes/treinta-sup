import '@testing-library/jest-dom/extend-expect';

import {Languages} from './src/config/constants/languages';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {language: Languages.ES},
  }),
  Trans: ({defaults}) => defaults,
}));

jest.mock('use-reducer-logger', () => param => param);
