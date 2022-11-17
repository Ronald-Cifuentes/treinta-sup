import {FC} from 'react';
import {StepTwoContainer} from './StepTwo.styled';
import {StepTwoProps} from './types';

export const StepTwo: FC<StepTwoProps> = ({dataTestId = 'step-two-test'}) => (
  <StepTwoContainer data-testid={dataTestId}>Step Two</StepTwoContainer>
);
