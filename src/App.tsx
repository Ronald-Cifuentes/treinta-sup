/* eslint-disable import/no-default-export */
import {FC} from 'react';
import {ThemeProvider} from 'styled-components';
// import {datadogRum} from '@datadog/browser-rum';
// import {ErrorBoundary} from 'react-error-boundary';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {BrowserRouter as Router} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';

// import {Error} from 'modules/Error';
import {HeadTags} from 'components/molecules';
import {AuthProvider} from 'context/AuthContext';
import {DashboardProvider} from 'context/DashboardContext';
import {ConfigProvider} from 'context/ConfigContext/ConfigContext';
import {ToastProvider as ToastDashboardProvider} from 'context/ToastContext/ToastContext';
import {Routes} from './routes';
import {GlobalStyle} from './config/GlobalStyle';
import '@fortawesome/fontawesome-free'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});
const App: FC = () => (
  // const errorHandler = (error: Error, info): void => {
  //  // TODO: Add datadog rum
  //  console.error(error, info);
  // };

  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={TreintaTheme}>
      <GlobalStyle />
      <Router>
        <ConfigProvider>
          <HeadTags>
            <AuthProvider>
              <ToastDashboardProvider>
                <DashboardProvider>
                  <Routes />
                </DashboardProvider>
              </ToastDashboardProvider>
            </AuthProvider>
          </HeadTags>
        </ConfigProvider>
      </Router>
    </ThemeProvider>
  </QueryClientProvider>
);
export default App;
