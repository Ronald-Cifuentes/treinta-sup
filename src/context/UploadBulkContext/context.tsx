import {useReducer, createContext, FC, useContext} from 'react';

import loggerReducer from 'utils/logger';

import {Action, State} from './types';
import {reducer, initialState} from './reducer';

export const UploadBulkContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const UploadBulkProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    loggerReducer(reducer),
    initialState,
  );

  return (
    <UploadBulkContext.Provider value={{state, dispatch}}>
      {children}
    </UploadBulkContext.Provider>
  );
};

export const useUploadBulk = (): {
  state: State;
  dispatch: React.Dispatch<Action>;
} => useContext(UploadBulkContext);
