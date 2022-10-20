import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {renderHook} from '@testing-library/react-hooks';
import {RenderHookResult} from '@testing-library/react-hooks/lib/types';
import {FC, ReactElement} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {MemoryRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';

const AllTheProviders: FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <ThemeProvider theme={TreintaTheme}>{children}</ThemeProvider>
      </MemoryRouter>
    </QueryClientProvider>
  );
};

export const customRenderHook = <TProps, TResult>(
  hook: (props: TProps) => TResult,
  AditionalProvider: FC = ({children}) => children as ReactElement,
): RenderHookResult<TProps, TResult> =>
  renderHook(hook, {
    wrapper: ({children}) => (
      <AllTheProviders>
        <AditionalProvider>{children}</AditionalProvider>
      </AllTheProviders>
    ),
  });
