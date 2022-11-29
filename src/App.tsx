/* eslint-disable import/no-default-export */
import {Backdrop} from '@30sas/web-ui-kit-core';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import * as Sentry from '@sentry/react';
import {HeadTags} from 'components/molecules';
import {AuthProvider} from 'context/AuthContext';
import {ConfigProvider} from 'context/ConfigContext/ConfigContext';
import {DashboardProvider} from 'context/DashboardContext';
import {StoreContext} from 'context/StoreProvider/StoreProvider';
import {ToastProvider} from 'context/ToastContext/ToastProvider';
import {UploadBulkProvider} from 'context/UploadBulkContext';
import {FC, useContext} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
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

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={TreintaTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <ConfigProvider>
            <HeadTags>
              <AuthProvider>
                <ToastProvider>
                  <UploadBulkProvider>
                    <DashboardProvider>
                      <Routes />
                    </DashboardProvider>
                  </UploadBulkProvider>
                </ToastProvider>
              </AuthProvider>
            </HeadTags>
          </ConfigProvider>
        </BrowserRouter>
        <Backdrop open={loading} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Sentry.withProfiler(App);
