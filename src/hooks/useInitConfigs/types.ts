import {UserConfig} from 'services/models';

export interface UseInitConfigs {
  isConfigReady: boolean;
  init: () => void;
  setUser: (userConfig: UserConfig, id?: string) => void;
}
