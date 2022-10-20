import {FC, ReactElement} from 'react';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import {render, RenderResult} from '@testing-library/react';

export const MockProviderThemeAndRouter: FC = ({children}) => (
  <ThemeProvider theme={TreintaTheme}>
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);

export const renderThemeAndRouter = (
  ui: ReactElement | JSX.Element,
  AditionalProvider: FC = ({children}) => children as ReactElement,
): RenderResult =>
  render(ui, {
    wrapper: ({children}) => (
      <MockProviderThemeAndRouter>
        <AditionalProvider>{children}</AditionalProvider>
      </MockProviderThemeAndRouter>
    ),
  });
