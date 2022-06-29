import {render, screen} from '__tests__/test-utils';
import {SectionDestination} from './SectionDestination';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<SectionDestination />', () => {
  // UI TESTING
  test('#1. Exist', () => {
    render(<SectionDestination />);
    const sectionDestination = screen.getByTestId('section-destination');
    expect(sectionDestination).toBeInTheDocument();
  });
});
