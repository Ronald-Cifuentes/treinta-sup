import {FC, ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, RenderResult} from '@testing-library/react';

export const MockProviderRouter: FC = ({children}) => (
  <BrowserRouter>{children}</BrowserRouter>
);

export const renderRouter = (
  ui: ReactElement | JSX.Element,
  AditionalProvider: FC = ({children}) => children as ReactElement,
): RenderResult =>
  render(ui, {
    wrapper: ({children}) => (
      <MockProviderRouter>
        <AditionalProvider>{children}</AditionalProvider>
      </MockProviderRouter>
    ),
  });
