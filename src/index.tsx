import * as Sentry from '@sentry/react';
import {BrowserTracing} from '@sentry/tracing';
import {AxiosInterceptor} from 'config/AxiosInterceptors';
import {StoreProvider} from 'context/StoreProvider/StoreProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  // Setting tracesSampleRate to 0.2 to capture 20%
  // of transactions for performance monitoring on prod
  tracesSampleRate:
    process.env.REACT_APP_ENVIRONMENT === 'production' ? 0.2 : 1.0,
  environment: process.env.REACT_APP_ENVIRONMENT,
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <AxiosInterceptor>
        <App />
      </AxiosInterceptor>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
