import {FC, ReactElement} from 'react';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {ThemeProvider} from 'styled-components';
import {render, RenderResult} from '@testing-library/react';

export const MockProviderTheme: FC = ({children}) => (
  <ThemeProvider theme={TreintaTheme}>{children}</ThemeProvider>
);

export const renderTheme = (
  ui: ReactElement | JSX.Element,
  AditionalProvider: FC = ({children}) => children as ReactElement,
): RenderResult =>
  render(ui, {
    wrapper: ({children}) => (
      <MockProviderTheme>
        <AditionalProvider>{children}</AditionalProvider>
      </MockProviderTheme>
    ),
  });
