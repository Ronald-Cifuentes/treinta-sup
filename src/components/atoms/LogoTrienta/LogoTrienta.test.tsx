import {screen, render} from '__tests__/test-utils';

import pkg from '../../../../package.json';
import {LogoTreinta} from './LogoTrienta';

jest.mock('formik', () => ({
  ErrorMessage: ({children}): JSX.Element => <span>{children('Test')}</span>,
}));

describe('LogoTreinta', () => {
  it('Should render correctly', () => {
    render(<LogoTreinta />);
    expect(screen.getByText("Proveedores")).toBeInTheDocument();
  });
});
