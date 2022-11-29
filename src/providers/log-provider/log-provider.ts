/* eslint-disable @typescript-eslint/ban-types */
import {datadogRum} from '@datadog/browser-rum';

import {UserConfig} from 'services/models';

import pkg from '../../../package.json';

interface Params {
  name: string;
  context?: object;
  message?: string;
  error?: Error;
}

export class LogProvider {
  private initialized = false;
  private static instance: LogProvider;

  static getInstance(): LogProvider {
    if (!LogProvider.instance) {
      LogProvider.instance = new LogProvider();
    }
    return this.instance;
  }

  logError({name, error, context, message}: Params): void {
    if (this.initialized) {
      datadogRum.addError(error, {
        name,
        stackTrace: error?.stack,
        message: message || error?.message,
        versionCore: pkg.dependencies['@30sas/web-ui-kit-core'],
        ...context,
      });
    }
  }

  initProvider(): void {
    const {
      REACT_APP_TOKEN_DATA_DOG: tokenDataDog,
      REACT_APP_APP_ID_DATA_DOG: appIdDataDog,
      REACT_APP_LOGGER: logger,
      REACT_APP_ENVIRONMENT: env,
    } = process.env;
    if (logger && appIdDataDog && tokenDataDog) {
      datadogRum.init({
        applicationId: appIdDataDog,
        clientToken: tokenDataDog,
        env,
        site: 'datadoghq.com',
        service: 'treinta-web-suppliers',
        version: pkg.version,
        sampleRate: 100,
        trackInteractions: env === 'production',
        defaultPrivacyLevel: 'allow',
        allowedTracingOrigins: [/https:\/\/.*\.treinta\.co/],
      });
      this.initialized = true;
    }
  }

  startSessionReplay(): void {
    const {REACT_APP_ENVIRONMENT: env} = process.env;
    if (this.initialized && env === 'production') {
      datadogRum.startSessionReplayRecording();
    }
  }

  setUser(user: UserConfig): void {
    datadogRum.setUser({
      id: user?.id,
      uid: user?.uid,
      email: user?.email,
      name: user?.displayName,
    });
  }

  removeUser(): void {
    datadogRum.removeUser();
  }
}
