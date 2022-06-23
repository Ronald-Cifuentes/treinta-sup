import {render, screen} from '__tests__/test-utils';
import {SpecialTableWithPagination} from './SpecialTableWithPagination';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<SpecialTableWithPagination/>', () => {
  // UI TESTING
  test('#1. Exist', () => {
    render(<SpecialTableWithPagination />);
    const specialTableWithPagination = screen.getByTestId(
      'special-table-with-pagination',
    );
    expect(specialTableWithPagination).toBeInTheDocument();
  });
});
