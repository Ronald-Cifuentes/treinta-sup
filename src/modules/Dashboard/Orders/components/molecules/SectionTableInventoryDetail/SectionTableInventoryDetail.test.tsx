import {renderThemeAndRouter, screen} from '__tests__/test-utils';

import {SectionTableInventoryDetail} from './SectionTableInventoryDetail';

describe('<SectionTable />', () => {
  // UI TESTING
  test('#1. Exist', () => {
    renderThemeAndRouter(<SectionTableInventoryDetail />);
    const sectionTable = screen.getByTestId('section-table');
    expect(sectionTable).toBeInTheDocument();
  });
});
