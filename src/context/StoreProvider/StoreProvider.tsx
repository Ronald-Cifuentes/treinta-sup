import {createContext, FC, useState} from 'react';

export interface StoreContexProps {
  loading: boolean;
  setLoad: (value: boolean) => void;
}

const StoreContext = createContext<StoreContexProps>({} as StoreContexProps);

const StoreProvider: FC = ({children}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const setLoad = (value: boolean): void => {
    setLoading(value);
  };

  return (
    <StoreContext.Provider value={{loading, setLoad}}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
