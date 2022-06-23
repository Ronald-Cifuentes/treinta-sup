import {Country, getCountryList} from '@30sas/web-ui-kit-utils';
import {createContext, useState, FC, useContext, useEffect} from 'react';

import {useInitConfigs} from 'hooks';

// TYPES
export interface ConfigContextType {
  countries: Country[];
  setCountries?: (value?: Country) => void;
}

// CONTEXTS
const ConfigContext = createContext<ConfigContextType>({} as ConfigContextType);

// PROVIDERS
export const ConfigProvider: FC = ({children}) => {
  const [countries] = useState<Country[]>(getCountryList());
  const initConfigs = useInitConfigs();

  useEffect(() => {
    initConfigs.init();
  }, [initConfigs]);

  const value: ConfigContextType = {
    countries,
  };

  return (
    <ConfigContext.Provider value={value}>
      {initConfigs.isConfigReady && children}
    </ConfigContext.Provider>
  );
};

// EXPORT HOOKS
export const useConfig = (): ConfigContextType => useContext(ConfigContext);
