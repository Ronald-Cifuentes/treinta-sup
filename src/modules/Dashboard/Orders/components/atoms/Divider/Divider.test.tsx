import {render, screen} from '__tests__/test-utils';

import {DividerStyled} from './Divider';

describe('<DividerStyled />', () => {
  it('Should render correctly', () => {
    render(<DividerStyled />);
    expect(screen.queryByTestId('divider-select-category')).toBeDefined();
  });
});
