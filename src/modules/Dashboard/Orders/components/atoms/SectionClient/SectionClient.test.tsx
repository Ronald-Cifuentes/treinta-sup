import {render, screen} from '__tests__/test-utils';
import {SectionClient} from './SectionClient';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<SectionClient />', () => {
  // UI TESTING
  test('#1. Exist', () => {
    render(<SectionClient />);
    const sectionClient = screen.getByTestId('section-client');
    expect(sectionClient).toBeInTheDocument();
  });
});
