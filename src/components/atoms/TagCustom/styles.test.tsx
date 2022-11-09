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
  test('#1. <Container /> - with variant default', () => {
    renderTheme(
      <Container
        data-testid={DATA_TEST_ID_TAG_CUSTOM}
        variant="default"
        show={false}
      />,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TAG_CUSTOM);
    expect(container).toBeInTheDocument();
  });

  test('#2. <Container /> - with variant info', () => {
    renderTheme(
      <Container data-testid={DATA_TEST_ID_TAG_CUSTOM} variant="info" />,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TAG_CUSTOM);
    expect(container).toBeInTheDocument();
  });

  test('#3. <Container /> - with variant success', () => {
    renderTheme(
      <Container data-testid={DATA_TEST_ID_TAG_CUSTOM} variant="success" />,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TAG_CUSTOM);
    expect(container).toBeInTheDocument();
  });

  test('#4. <Container /> - with variant warning', () => {
    renderTheme(
      <Container data-testid={DATA_TEST_ID_TAG_CUSTOM} variant="warning" />,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TAG_CUSTOM);
    expect(container).toBeInTheDocument();
  });

  test('#5. <Container /> - with variant error', () => {
    renderTheme(
      <Container data-testid={DATA_TEST_ID_TAG_CUSTOM} variant="error" />,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TAG_CUSTOM);
    expect(container).toBeInTheDocument();
  });

  test('#6. <Container />', () => {
    renderTheme(
      <Container
        data-testid={DATA_TEST_ID_TAG_CUSTOM}
        {...INVARIABLE_PROPS_TAG_CUSTOM}
      />,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TAG_CUSTOM);
    expect(container).toBeInTheDocument();
  });

  test('#7. <Text />', () => {
    renderTheme(
      <Text data-testid={DATA_TEST_ID_TEXT} size="small" variants="default">
        Text
      </Text>,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TEXT);
    expect(container).toBeInTheDocument();
  });

  test('#7. <Text /> - variant default', () => {
    renderTheme(
      <Text data-testid={DATA_TEST_ID_TEXT} size="large" variants="default">
        Text
      </Text>,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TEXT);
    expect(container).toBeInTheDocument();
  });

  test('#7. <Text /> - variant info', () => {
    renderTheme(
      <Text data-testid={DATA_TEST_ID_TEXT} size="small" variants="info">
        Text
      </Text>,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TEXT);
    expect(container).toBeInTheDocument();
  });

  test('#7. <Text /> - variant success', () => {
    renderTheme(
      <Text data-testid={DATA_TEST_ID_TEXT} size="small" variants="success">
        Text
      </Text>,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TEXT);
    expect(container).toBeInTheDocument();
  });

  test('#7. <Text /> - variant warning', () => {
    renderTheme(
      <Text data-testid={DATA_TEST_ID_TEXT} size="small" variants="warning">
        Text
      </Text>,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TEXT);
    expect(container).toBeInTheDocument();
  });

  test('#7. <Text /> - variant error', () => {
    renderTheme(
      <Text data-testid={DATA_TEST_ID_TEXT} size="small" variants="error">
        Text
      </Text>,
    );
    const container = screen.getByTestId(DATA_TEST_ID_TEXT);
    expect(container).toBeInTheDocument();
  });
});
