import {renderThemeAndRouter, screen} from '__tests__/test-utils';
import {StepOne} from './StepOne';

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

describe('<StepOne/>', () => {
  test('#1. Exist - Render correclty', () => {
    renderThemeAndRouter(<StepOne />);
    const stepOne = screen.getByTestId('step-one-test');
    expect(stepOne).toBeInTheDocument();
  });
});
