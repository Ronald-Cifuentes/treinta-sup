import {render, screen} from '__tests__/test-utils';

import {SectionOrigin} from './SectionOrigin';

describe('<SectionOrigin />', () => {
  // UI TESTING
  test('#1. Exist', () => {
    render(<SectionOrigin />);
    const sectionOrigin = screen.getByTestId('section-origin');
    expect(sectionOrigin).toBeInTheDocument();
  });
});
