import {customRender, screen} from '__tests__/test-utils';
import {SectionClient} from './SectionClient';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<SectionClient />', () => {
  // UI TESTING
  test('#1. Exist', () => {
    customRender(<SectionClient />);
    const sectionClient = screen.getByTestId('section-client');
    expect(sectionClient).toBeInTheDocument();
  });
});
