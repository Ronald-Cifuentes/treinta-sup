import {render, screen} from '@testing-library/react';
import {FC} from 'react';
import {
  OrderBulkUpdateContext,
  OrderBulkUpdateProvider,
  useOrderBulkUpdate,
} from './context';
import {State} from './types';

const TestComponent1: FC = () => {
  const {state, dispatch} = useOrderBulkUpdate();
  if (typeof state == 'object' && typeof dispatch == 'function') {
    return <div>Works correctly</div>;
  } else {
    return <div>Not have a context</div>;
  }
};

describe('OrderBulkUpdateContext', () => {
  test('#1. Exist - Render correctly - OrderBulkUpdateContext', () => {
    const state = {} as State;
    const dispatch = jest.fn();
    render(
      <OrderBulkUpdateContext.Provider value={{state, dispatch}}>
        <TestComponent1 />
      </OrderBulkUpdateContext.Provider>,
    );

    expect(screen.getByText('Works correctly')).toBeInTheDocument();
  });

  test('#2. Exist - Render correctly - OrderBulkUpdateProvider', () => {
    render(
      <OrderBulkUpdateProvider>
        <TestComponent1 />
      </OrderBulkUpdateProvider>,
    );

    expect(screen.getByText('Works correctly')).toBeInTheDocument();
  });
});
