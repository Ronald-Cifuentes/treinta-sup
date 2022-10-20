import {render, RenderResult} from '@testing-library/react';
import React, {FC, ReactElement} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {AxiosInterceptor} from '../src/config/AxiosInterceptors';

export const MockProviderAxiosAndQuery: FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <AxiosInterceptor>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AxiosInterceptor>
  );
};

export const renderAxiosAndQuery = (
  ui: ReactElement | JSX.Element,
  AditionalProvider: FC = ({children}) => children as ReactElement,
): RenderResult =>
  render(ui, {
    wrapper: ({children}) => (
      <MockProviderAxiosAndQuery>
        <AditionalProvider>{children}</AditionalProvider>
      </MockProviderAxiosAndQuery>
    ),
  });
