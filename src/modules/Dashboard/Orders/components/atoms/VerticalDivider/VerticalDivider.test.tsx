import {render, screen} from '__tests__/test-utils';

import {VerticalDividerStyled} from './VerticalDivider';

describe('<VerticalDividerStyled />', () => {
  it('Should render correctly', () => {
    render(<VerticalDividerStyled />);
    expect(screen.queryByTestId('vertical-divider-filter')).toBeDefined();
  });
});
