import {renderTheme, screen} from '__tests__/test-utils';
import {StepTwoSuccess} from './StepTwoSuccess';
import {successData} from './StepTwoSuccess.mock';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<StepTwoSuccess/>', () => {
  test('#1. Exist - Render correctly StepTwoSuccess', () => {
    renderTheme(<StepTwoSuccess />);
    const stepTwoSuccess = screen.getByTestId('step-two-success-test');
    expect(stepTwoSuccess).toBeInTheDocument();
  });

  test('#2. Exist - Render StepTwoSuccess with data success', () => {
    renderTheme(<StepTwoSuccess data={successData?.success} />);
    const stepTwoSuccess = screen.getByTestId('step-two-success-test');
    expect(stepTwoSuccess).toBeInTheDocument();
  });
});
