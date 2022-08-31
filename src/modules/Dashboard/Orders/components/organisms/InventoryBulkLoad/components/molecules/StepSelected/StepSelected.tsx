import {FC} from 'react';
import {StepOne} from '../../atoms/StepOne';
import {StepThree} from '../../atoms/StepThree';
import {StepTwo} from '../../atoms/StepTwo';
import {StepSelectedProps} from './types';

export const StepSelected: FC<StepSelectedProps> = ({status}) => {
  switch (status) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    default:
      return <h1>Not Step</h1>;
  }
};
