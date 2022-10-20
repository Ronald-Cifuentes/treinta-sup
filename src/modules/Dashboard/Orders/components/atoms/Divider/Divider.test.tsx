import {renderTheme, screen} from '__tests__/test-utils';
import {DividerStyled} from './Divider';

describe('<DividerStyled />', () => {
  it('Should render correctly', () => {
    renderTheme(<DividerStyled />);
    expect(screen.queryByTestId('divider-select-category')).toBeDefined();
  });
});
