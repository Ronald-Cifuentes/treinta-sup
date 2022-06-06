import {render, screen, fireEvent, prettyDOM} from '__tests__/test-utils';
import FiltersAndReport from './FiltersAndReport'

describe('<FiltersAndReport/>', () => {
    // UI TESTING
    test('#1 - Exist', () => {
        render(<FiltersAndReport/>)
        const Table = screen.getByTestId('filters-and-report')
        expect(Table).toBeInTheDocument();
    });
});