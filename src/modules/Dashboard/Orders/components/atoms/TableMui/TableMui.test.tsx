import {render, screen} from '__tests__/test-utils';
import {TableMui} from './TableMui';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<TableMui/>', () => {
  // UI TESTING
  test('#1 - Exist', () => {
    render(<TableMui />);
    const Table = screen.getByTestId('table-mui');
    expect(Table).toBeInTheDocument();
  });
});
