import { render, screen, fireEvent, prettyDOM } from '__tests__/test-utils'
import SpecialTableWithPagination from './SpecialTableWithPagination';

describe('<SpecialTableWithPagination/>', () => {
    // UI TESTING
    test('#1. Exist', () => {
        render(<SpecialTableWithPagination/>)
        const specialTableWithPagination = screen.getByTestId('special-table-with-pagination')
        console.log(prettyDOM(specialTableWithPagination))
    });
});