import React, {FC, ReactElement} from 'react';
import {render, RenderResult} from '@testing-library/react';
import {QueryClient, QueryClientProvider} from 'react-query';

const QueryProviders: FC = ({children}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export const renderQuery = (
  ui: ReactElement | JSX.Element,
  AditionalProvider: FC = ({children}) => children as ReactElement,
): RenderResult =>
  render(ui, {
    wrapper: ({children}) => (
      <QueryProviders>
        <AditionalProvider>{children}</AditionalProvider>
      </QueryProviders>
    ),
  });
