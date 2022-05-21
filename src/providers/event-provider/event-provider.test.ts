import Amplitude from 'amplitude-js';
import TagManager from 'react-gtm-module';
import analytics from 'firebase/analytics';

import {EventProvider} from './event-provider';

jest.mock('firebase/analytics', () => ({
  logEvent: jest.fn(),
  setUserId: jest.fn(),
  getAnalytics: jest.fn(),
  initializeAnalytics: jest.fn(),
}));
jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('EventProvider', () => {
  beforeAll(() => {
    process.env = {
      ...process.env,
      REACT_APP_GTM_ID: 'test-id',
      REACT_APP_BRAZE_TOKEN: 'test',
      REACT_APP_BRAZE_URL: 'test-url',
      REACT_APP_FB_PIXEL_ID: 'test-id',
      REACT_APP_MEASUREMENT_ID: 'test-id',
      REACT_APP_AMPLITUDE_API_KEY: 'test',
      REACT_APP_SINGULAR_API_KEY: 'test-key',
      REACT_APP_SINGULAR_SECRET_KEY: 'secret',
    };
  });

  it('Should init event providers', () => {
    const spyAmplitude = jest.fn();
    const spyTagManager = jest.fn();

    jest
      .spyOn(Amplitude, 'getInstance')
      .mockImplementation(jest.fn().mockReturnValue({init: spyAmplitude}));
    jest.spyOn(TagManager, 'initialize').mockImplementation(spyTagManager);

    EventProvider.getInstance().initProvider();

    expect(spyAmplitude).toBeCalled();
    expect(spyTagManager).toBeCalled();
  });

  it('Should log with all providers', () => {
    const spyAmplitude = jest.fn();
    const spyAnalytics = jest.fn();
    const event = {eventName: 'Test', args: {}};

    jest.spyOn(analytics, 'logEvent').mockImplementation(spyAnalytics);
    jest
      .spyOn(Amplitude, 'getInstance')
      .mockImplementation(
        jest.fn().mockReturnValue({logEvent: spyAmplitude, init: jest.fn()}),
      );

    EventProvider.getInstance().initProvider();
    EventProvider.getInstance().logGlobalEvent({
      amplitudeEvents: [event],
      analyticsEvents: [event],
      brazeEvents: [event],
      fbPixelEvents: [event],
    });

    expect(spyAmplitude).toBeCalled();
    expect(spyAnalytics).toBeCalled();
  });
});
