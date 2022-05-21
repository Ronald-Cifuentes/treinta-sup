import {FC, ReactElement} from 'react';
import {MemoryRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {renderHook} from '@testing-library/react-hooks';
import {render, RenderResult} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {RenderHookResult} from '@testing-library/react-hooks/lib/types';

const queryClient = new QueryClient();

const AllTheProviders: FC = ({children}) => (
  <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <ThemeProvider theme={TreintaTheme}>{children}</ThemeProvider>
    </MemoryRouter>
  </QueryClientProvider>
);

const customRender = (
  ui: ReactElement | JSX.Element,
  AditionalProvider: FC = ({children}) => children as ReactElement,
): RenderResult =>
  render(ui, {
    wrapper: ({children}) => (
      <AllTheProviders>
        <AditionalProvider>{children}</AditionalProvider>
      </AllTheProviders>
    ),
  });

const customRenderHook = <TProps, TResult>(
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

export * from '@testing-library/react';

export {customRender as render};
export {customRenderHook as renderHook};
