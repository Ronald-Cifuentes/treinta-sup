import {renderTheme, screen} from '__tests__/test-utils';
import {StepTwoLoading} from './StepTwoLoading';
jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<StepTwoLoading/>', () => {
  test('#1. Exist - Render correctly StepTwoLoading', () => {
    renderTheme(<StepTwoLoading />);
    const stepTwoLoading = screen.getByTestId('step-two-loading-test');
    expect(stepTwoLoading).toBeInTheDocument();
  });
});
