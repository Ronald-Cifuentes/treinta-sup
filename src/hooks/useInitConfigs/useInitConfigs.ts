import {useState} from 'react';

import {UserConfig} from 'services/models';
import {LogProvider} from 'providers/log-provider';
import {I18nProvider} from 'providers/intl-provider';
import {EventProvider} from 'providers/event-provider';

import {UseInitConfigs} from './types';

export const useInitConfigs = (): UseInitConfigs => {
  const [isConfigReady, setIsConfigReady] = useState(false);

  const init = (): void => {
    LogProvider.getInstance().initProvider();
    I18nProvider.getInstance().initProvider();
    EventProvider.getInstance().initProvider();
    setIsConfigReady(true);
  };

  const setUser = (userConfig: UserConfig, id?: string): void => {
    if (userConfig?.uid && id) {
      const logger = LogProvider.getInstance();
      logger.setUser({...userConfig, id});
      logger.startSessionReplay();
      EventProvider.getInstance().setUserId(id);
    }
  };

  return {isConfigReady, init, setUser};
};
