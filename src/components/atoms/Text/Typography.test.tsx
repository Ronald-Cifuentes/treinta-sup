import {renderTheme, screen} from '__tests__/test-utils';

import {Typography} from './index';

describe('Typography', () => {
  beforeEach(() => {
    renderTheme(<Typography>Test</Typography>);
  });
  it('Typography render', () => {
    expect(screen.getByTestId('default-typography')).toBeInTheDocument();
  });
});
