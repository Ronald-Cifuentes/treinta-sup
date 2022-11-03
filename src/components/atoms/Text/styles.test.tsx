import {FontsName} from '@30sas/web-ui-kit-theme';
import {fireEvent, renderTheme, screen} from '__tests__/test-utils';
import {BaseTypography} from './styles';
import {BaseProps} from './types';

const DATA_TEST_ID_BASE_TYPOGRAPHY = 'Base-Typography-Test';

const spyOnClick = jest.fn();

const INVARIABLE_PROPS_BASE_TYPOGRAPHY: BaseProps = {
  font: FontsName.Nunito,
  variant: 'Medium',
  margin: '10px',
  padding: '10px',
  $color: 'neutrals',
  $colorType: 900,
};

describe('Text/styles', () => {
  beforeEach(() =>
    renderTheme(
      <BaseTypography
        {...INVARIABLE_PROPS_BASE_TYPOGRAPHY}
        data-testid={DATA_TEST_ID_BASE_TYPOGRAPHY}
        onClick={spyOnClick}
      />,
    ),
  );
  test('#1. <BaseTypography />', () => {
    const baseTypography = screen.getByTestId(DATA_TEST_ID_BASE_TYPOGRAPHY);
    expect(baseTypography).toBeInTheDocument();
  });

  test('#2. onClick <BaseTypography />', () => {
    const baseTypography = screen.getByTestId(DATA_TEST_ID_BASE_TYPOGRAPHY);
    fireEvent.click(baseTypography);
    expect(spyOnClick).toHaveBeenCalledTimes(1);
  });
});
