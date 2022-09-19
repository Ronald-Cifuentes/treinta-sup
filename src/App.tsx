/* eslint-disable import/no-default-export */
import {FC, useContext} from 'react';
import {ThemeProvider} from 'styled-components';
// import {datadogRum} from '@datadog/browser-rum';
// import {ErrorBoundary} from 'react-error-boundary';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter as Router} from 'react-router-dom';

// import {Error} from 'modules/Error';
import {HeadTags} from 'components/molecules';
import {AuthProvider} from 'context/AuthContext';
import {ConfigProvider} from 'context/ConfigContext/ConfigContext';
import {DashboardProvider} from 'context/DashboardContext';
import {StoreContext} from 'context/StoreProvider/StoreProvider';
import {ToastProvider as ToastDashboardProvider} from 'context/ToastContext/ToastContext';
import {Backdrop} from '@30sas/web-ui-kit-core';
import {UploadBulkProvider} from 'context/UploadBulkContext';
import {GlobalStyle} from './config/GlobalStyle';
import {Routes} from './routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});
const App: FC = () => {
  const {loading} = useContext(StoreContext);
  // const errorHandler = (error: Error, info): void => {
  //  // TODO: Add datadog rum
  //  console.error(error, info);
  // };
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={TreintaTheme}>
        <GlobalStyle />
        <Router>
          <ConfigProvider>
            <HeadTags>
              <AuthProvider>
                <ToastDashboardProvider>
                  <UploadBulkProvider>
                    <DashboardProvider>
                      <Routes />
                    </DashboardProvider>
                  </UploadBulkProvider>
                </ToastDashboardProvider>
              </AuthProvider>
            </HeadTags>
          </ConfigProvider>
        </Router>
        <Backdrop open={loading} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
