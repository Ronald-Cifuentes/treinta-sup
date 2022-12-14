import {
  cleanup,
  customRender,
  renderTheme,
  renderThemeAndRouter,
  screen,
} from '__tests__/test-utils';
import {StepSelected} from './StepSelected';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('</>', () => {
  beforeEach(cleanup);
  test('#1. Exist - Render correctly - case default', () => {
    renderTheme(<StepSelected />);
    const stepSelected = screen.getByText('Not Step');
    expect(stepSelected).toBeInTheDocument();
  });
  test('#2. Exist - Render correctly - case 0', () => {
    renderThemeAndRouter(<StepSelected status={0} />);
    const stepSelected = screen.getByTestId('step-one-test');
    expect(stepSelected).toBeInTheDocument();
  });
  test('#3. Exist - Render correctly - case 1', () => {
    customRender(<StepSelected status={1} />);
    const stepSelected = screen.getByTestId('step-two-test');
    expect(stepSelected).toBeInTheDocument();
  });
});
