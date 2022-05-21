import {datadogRum} from '@datadog/browser-rum';

import {LogProvider} from './log-provider';

describe('LogProvider', () => {
  let instance: LogProvider;
  beforeAll(() => {
    process.env.REACT_APP_LOGGER = 'true';
    process.env.REACT_APP_APP_ID_DATA_DOG = 'test-id';
    process.env.REACT_APP_TOKEN_DATA_DOG = 'token-test';
    instance = LogProvider.getInstance();
  });
  it('should get instance', () => {
    expect(instance).toBeInstanceOf(LogProvider);
  });
  it('should init log provider', () => {
    const spyInit = jest.fn();
    jest.spyOn(datadogRum, 'init').mockImplementation(spyInit);
    instance.initProvider();
    expect(spyInit).toBeCalled();
  });
  it('should log error', () => {
    const spyAddError = jest.fn();
    jest.spyOn(datadogRum, 'addError').mockImplementation(spyAddError);
    instance.logError({name: 'Test'});
    expect(spyAddError).toBeCalled();
  });
});
