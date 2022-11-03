import {renderThemeAndRouter, screen} from '__tests__/test-utils';
import {SectionSearchCtrls} from './SectionSearchCtrls';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<SectionSearchCtrls/>', () => {
  test('#1. It should render component', () => {
    // UI TESTING
    renderThemeAndRouter(<SectionSearchCtrls />);
    const inventory = screen.getByTestId('section-search-ctrls');
    expect(inventory).toBeInTheDocument();
  });
});
