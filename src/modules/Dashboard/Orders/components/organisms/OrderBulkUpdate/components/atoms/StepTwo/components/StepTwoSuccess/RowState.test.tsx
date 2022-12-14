import {renderTheme, screen} from '__tests__/test-utils';
import {RowState} from './RowState';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<RowState />', () => {
  test('#1. Exist - Render without information RowState', () => {
    renderTheme(<RowState />);
    const existRowState = screen.getByTestId('row-state-id');
    expect(existRowState).toBeInTheDocument();
  });

  test('#2. Exist - Render correctly RowState', () => {
    renderTheme(
      <RowState
        tagLeftColor="info"
        tagLeftText="Confirmado"
        leftNumberOrders="50 órdenes"
        tagRightColor="success"
        tagRightText="Entregado"
      />,
    );
    const existRowState = screen.getByTestId('row-state-id');
    expect(existRowState).toBeInTheDocument();
  });
});
