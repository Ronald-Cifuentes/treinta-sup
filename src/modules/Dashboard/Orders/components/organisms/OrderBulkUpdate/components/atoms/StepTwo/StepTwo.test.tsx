import {render, screen} from '@testing-library/react';
import {StepTwo} from './StepTwo';

describe('</>', () => {
  test('#1. Exist - Render correctly', () => {
    render(<StepTwo />);
    const stepTwo = screen.getByTestId('step-two-test');
    expect(stepTwo).toBeInTheDocument();
  });
});
