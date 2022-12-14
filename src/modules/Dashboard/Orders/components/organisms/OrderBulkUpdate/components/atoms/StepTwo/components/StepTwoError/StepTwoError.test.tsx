import {renderTheme, screen} from '__tests__/test-utils';
import {StepTwoError} from './StepTwoError';
import {errorsData} from './StepTwoErrors.mock';
jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<StepTwoError/>', () => {
  test('#1. Exist - Render correctly StepTwoError', () => {
    renderTheme(<StepTwoError />);
    const stepTwoErrors = screen.getByTestId('step-two-error-test');
    expect(stepTwoErrors).toBeInTheDocument();
  });

  test('#2. Exist - Render StepTwoError with data errors', () => {
    renderTheme(<StepTwoError data={errorsData?.errors} />);
    const stepTwoErrors = screen.getByTestId('step-two-error-test');
    expect(stepTwoErrors).toBeInTheDocument();
  });
});
