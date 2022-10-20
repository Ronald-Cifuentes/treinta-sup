import {screen, renderTheme} from '__tests__/test-utils';

import {LogoTreinta} from './LogoTrienta';

jest.mock('formik', () => ({
  ErrorMessage: ({children}): JSX.Element => <span>{children('Test')}</span>,
}));

describe('LogoTreinta', () => {
  it('Should render correctly', () => {
    renderTheme(<LogoTreinta />);
    expect(screen.getByText('Proveedores')).toBeInTheDocument();
  });
});
