import {render, RenderResult} from '@testing-library/react';
import React, {FC, ReactElement} from 'react';
import {AxiosInterceptor} from '../src/config/AxiosInterceptors';

export const MockProviderAxios: FC<{children: JSX.Element}> = ({children}) => (
  <AxiosInterceptor>{children}</AxiosInterceptor>
);

export const renderAxios = (
  ui: ReactElement | JSX.Element,
  AditionalProvider: FC = ({children}) => children as ReactElement,
): RenderResult =>
  render(ui, {
    wrapper: ({children}) => (
      <MockProviderAxios>
        <AditionalProvider>{children}</AditionalProvider>
      </MockProviderAxios>
    ),
  });
