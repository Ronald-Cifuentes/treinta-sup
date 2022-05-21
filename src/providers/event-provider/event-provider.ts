import {
  logEvent,
  setUserId,
  getAnalytics,
  initializeAnalytics,
} from 'firebase/analytics';
import Amplitude from 'amplitude-js';
import TagManager from 'react-gtm-module';

import {app} from 'config/firebase';
import {Events} from 'config/constants';

import pkg from '../../../package.json';
import {GlobalEvent, Services} from './types';

export class EventProvider {
  private static instance: EventProvider;
  private servicesInitialized: Services[] = [];

  static getInstance(): EventProvider {
    if (!EventProvider.instance) {
      EventProvider.instance = new EventProvider();
    }
    return this.instance;
  }

  initProvider(): void {
    this.initTagManager();
    this.initAmplitude();
    this.initAnalytics();
  }

  setUserId(id: string): void {
    const amplitude = Amplitude.getInstance();
    const amplitudeIdentify = new amplitude.Identify().set(
      'version',
      pkg.version,
    );
    amplitude.identify(amplitudeIdentify);
    amplitude.setUserId(id);
    setUserId(getAnalytics(app), id);
  }

  logEventAmplitude(eventName: string, data?: object): void {
    if (this.servicesInitialized.includes(Services.Amplitude)) {
      Amplitude.getInstance().logEvent(eventName, data);
    }
  }

  logAnalytics(eventName: Events, data?: object): void {
    if (this.servicesInitialized.includes(Services.Analytics)) {
      logEvent(getAnalytics(app), eventName, data);
    }
  }

  logGlobalEvent({analyticsEvents, amplitudeEvents}: GlobalEvent): void {
    amplitudeEvents?.forEach(({eventName, args}) => {
      this.logEventAmplitude(eventName, args);
    });
    analyticsEvents?.forEach(({eventName, args}) => {
      this.logAnalytics(eventName as Events, args);
    });
  }

  private initTagManager(): void {
    const {REACT_APP_GTM_ID: gtmId} = process.env;
    if (gtmId) {
      TagManager.initialize({gtmId});
      this.servicesInitialized.push(Services.GTM);
    }
  }

  private initAnalytics(): void {
    const {REACT_APP_MEASUREMENT_ID: id} = process.env;
    if (id) {
      initializeAnalytics(app);
      this.servicesInitialized.push(Services.Analytics);
    }
  }

  private initAmplitude(): void {
    const {REACT_APP_AMPLITUDE_API_KEY: apiKey} = process.env;
    if (apiKey) {
      Amplitude.getInstance().init(apiKey, '', {
        saveEvents: true,
        includeUtm: true,
        includeReferrer: true,
        includeGclid: true,
        unsetParamsReferrerOnNewSession: true,
      });
      this.servicesInitialized.push(Services.Amplitude);
    }
  }
}
