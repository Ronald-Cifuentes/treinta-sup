import {renderTheme, screen} from '__tests__/test-utils';

import {Tag} from './Tag';

describe('WarningCustom', () => {
  it('WarningCustom render', () => {
    renderTheme(<Tag label="¡Pronto!" variant="default" />);
    expect(screen.queryByText('¡Pronto!')).toBeInTheDocument();
  });
});
