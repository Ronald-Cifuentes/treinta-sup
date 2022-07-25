import {render, screen} from '__tests__/test-utils';
import {FiltersAndReport} from './FiltersAndReport';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<FiltersAndReport/>', () => {
  // UI TESTING
  test('#1 - Exist', () => {
    render(<FiltersAndReport />);
    const Table = screen.getByTestId('filters-and-report');
    expect(Table).toBeInTheDocument();
  });
});
