import {renderTheme, screen} from '__tests__/test-utils';
import {SectionDestination} from './SectionDestination';

describe('<SectionDestination />', () => {
  // UI TESTING
  test('#1. Exist', () => {
    renderTheme(<SectionDestination />);
    const sectionDestination = screen.getByTestId('section-destination');
    expect(sectionDestination).toBeInTheDocument();
  });
});
