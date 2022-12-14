import {customRender, screen} from '__tests__/test-utils';
import {StepTwo} from './StepTwo';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('</>', () => {
  test('#1. Exist - Render correctly', () => {
    customRender(<StepTwo />);
    const stepTwo = screen.getByTestId('step-two-test');
    expect(stepTwo).toBeInTheDocument();
  });
});
