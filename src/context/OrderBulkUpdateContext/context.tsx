import React, {createContext, FC, useContext, useReducer} from 'react';
import loggerReducer from 'utils/logger';
import {initialState, reducer} from './reducer';
import {Action, State} from './types';

export const OrderBulkUpdateContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const OrderBulkUpdateProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(
    loggerReducer(reducer),
    initialState,
  );

  return (
    <OrderBulkUpdateContext.Provider value={{state, dispatch}}>
      {children}
    </OrderBulkUpdateContext.Provider>
  );
};

export const useOrderBulkUpdate = (): {
  state: State;
  dispatch: React.Dispatch<Action>;
} => useContext(OrderBulkUpdateContext);
