import {Reducer} from 'react';
import logger from 'use-reducer-logger';

const loggerReducer = <T, U>(reducer: Reducer<T, U>): Reducer<T, U> =>
  process.env.REACT_APP_ENVIRONMENT !== 'production'
    ? logger(reducer)
    : reducer;

// eslint-disable-next-line import/no-default-export
export default loggerReducer;
