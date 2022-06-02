import { ChangeEvent } from 'react'
import {render, screen, fireEvent, prettyDOM} from '__tests__/test-utils';
import SpecialPagination from './SpecialPagination'

describe('<SpecialPagination/>', () => {

    // UI TESTING
    test('#1. Exist', () => {
        render(<SpecialPagination count={5}/>)
        const pagination = screen.getByTestId('special-pagination')
        console.log(prettyDOM(pagination))
    })
    
    // FUNCTIONAL TESTING
    test('#2. Testing button Next and Before', () => {
        let page = -1
        const onChangeHandler = (event: ChangeEvent<unknown>, value: number) => {
            page = value
        }
        render(<SpecialPagination count={5} onChange={onChangeHandler}/>)
        const btnBefore = screen.getByTestId('NavigateBeforeIcon')
        const btnNext = screen.getByTestId('NavigateNextIcon')
        fireEvent.click(btnNext)
        expect(page).toBe(2)
        fireEvent.click(btnNext)
        expect(page).toBe(3)
        fireEvent.click(btnNext)
        expect(page).toBe(4)
        fireEvent.click(btnNext)
        expect(page).toBe(5)
        fireEvent.click(btnNext)
        expect(page).toBe(5)
        fireEvent.click(btnBefore)
        expect(page).toBe(4)
        fireEvent.click(btnBefore)
        expect(page).toBe(3)
        fireEvent.click(btnNext)
        expect(page).toBe(4)
        fireEvent.click(btnBefore)
        expect(page).toBe(3)
        fireEvent.click(btnBefore)
        expect(page).toBe(2)
        fireEvent.click(btnBefore)
        expect(page).toBe(1)
        fireEvent.click(btnBefore)
        expect(page).toBe(1)
    })
});