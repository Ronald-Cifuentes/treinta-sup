import {renderThemeAndRouter, screen} from '__tests__/test-utils';
import {SectionTable} from './SectionTable';

describe('<SectionTable />', () => {
  // UI TESTING
  test('#1. Exist', () => {
    renderThemeAndRouter(<SectionTable />);
    const sectionTable = screen.getByTestId('section-table');
    expect(sectionTable).toBeInTheDocument();
  });
});
