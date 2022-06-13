import {render, screen, fireEvent, prettyDOM} from '__tests__/test-utils';
import {TableMui} from './TableMui';

describe('<TableMui/>', () => {
  // UI TESTING
  test('#1 - Exist', () => {
    render(<TableMui />);
    const Table = screen.getByTestId('table-mui');
    expect(Table).toBeInTheDocument();
  });
});
