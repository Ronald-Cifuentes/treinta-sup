import {render, screen, fireEvent, prettyDOM} from '__tests__/test-utils';
import SpecialTable from './SpecialTable'
import {columns, columnsOne, rowsOneSimple, rowsSimple, rowsWithComponents} from './Mocks'
import { rowsOneComponent } from './Functions';

describe('<SpecialTable/>', () => {

    // UI TESTING
    test('#1 - Exist', () => {
        render(<SpecialTable/>)
        const Table = screen.getByTestId('special-table-container')
        expect(Table).toBeInTheDocument();
    });


    // FUNCTIONAL TESTING
    test('#2 - Add simple - one column - one row', () => {
        render(<SpecialTable columns={columnsOne} rows={rowsOneSimple}/>)
        const Table = screen.getByTestId('special-table-container')
        expect(Table).toHaveTextContent(rowsOneSimple[0].id.toString())
    });

    test('#3 - Add component - one column - one row', () => {
        const mockHandler = jest.fn()
        const rows = rowsOneComponent(mockHandler)
        render(<SpecialTable columns={columnsOne} rows={rows}/>)
        const button = screen.getByText('Testing Component')
        fireEvent.click(button)
        expect(mockHandler.mock.calls).toHaveLength(1)
    });
    
    test('#4 - Add simple - complete column - complete row', () => {
        render(<SpecialTable columns={columns} rows={rowsSimple}/>)
        const Table = screen.getByTestId('special-table-container')
        expect(Table).toHaveTextContent("Testing")
        expect(Table).toHaveTextContent("Testing_2")
    });
    
    test('#5 - Add component - complete column - complete row', () => {
        render(<SpecialTable columns={columns} rows={rowsWithComponents}/>)
        const Table = screen.getByTestId('special-table-container')
        expect(Table).toHaveTextContent("Preprogramado")
    });
})