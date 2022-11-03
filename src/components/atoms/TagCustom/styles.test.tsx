import {renderTheme, screen} from '__tests__/test-utils';
import {Container, Text} from './styles';
import {ContainerTag} from './types';

const DATA_TEST_ID_TAG_CUSTOM = 'TagCustom-Test';
const DATA_TEST_ID_TEXT = 'Text-Test';

const INVARIABLE_PROPS_TAG_CUSTOM: ContainerTag = {
  size: 'small',
  variant: 'default',
  justifyContent: 'center',
};

describe('TagCustom/styles', () => {
  test('#1. <Container />', () => {
    renderTheme(
      <Container
        {...INVARIABLE_PROPS_TAG_CUSTOM}
        data-testid={DATA_TEST_ID_TAG_CUSTOM}
      />,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TAG_CUSTOM);
    expect(container).toBeInTheDocument();
  });

  test('#2. <Text />', () => {
    renderTheme(
      <Text variants="default" size="small" data-testid={DATA_TEST_ID_TEXT}>
        Text
      </Text>,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TEXT);
    expect(container).toBeInTheDocument();
  });
});
