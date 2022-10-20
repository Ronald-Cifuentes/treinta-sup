import {renderTheme, screen} from '__tests__/test-utils';
import {SectionTotal} from './SectionTotal';

describe('<SectionTotal />', () => {
  // UI TESTING
  test('#1. Exist', () => {
    renderTheme(<SectionTotal />);
    const sectionTotal = screen.getByTestId('section-total');
    expect(sectionTotal).toBeInTheDocument();
  });
});
