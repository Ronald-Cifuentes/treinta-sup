import {I18nProvider} from './intl-provider';

const spyInit = jest.fn();
const useFn = jest.fn().mockReturnValue({init: spyInit});

jest.mock('i18next', () => ({
  use: jest.fn().mockImplementation(() => ({init: spyInit, use: useFn})),
  changeLanguage: jest.fn(),
}));

describe('I18nProvider', () => {
  let instance: I18nProvider;
  beforeAll(() => {
    instance = I18nProvider.getInstance();
  });
  it('should get instance', () => {
    expect(instance).toBeInstanceOf(I18nProvider);
  });
  it('should init i18n', () => {
    instance.initProvider();
    expect(spyInit).toBeCalled();
  });
  it('should create custom detector', () => {
    const {detectors} = instance.getLanguageDetectorConfig();
    expect(detectors['treinta-web-detector']).toMatchObject({
      name: 'treinta-web-detector',
    });
  });
});
