import {FC, ReactElement} from 'react';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {render, RenderResult} from '@testing-library/react';
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

export const customRender = (
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
