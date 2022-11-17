import {FC} from 'react';
import {StepOne} from '../../atoms/StepOne';
import {StepTwo} from '../../atoms/StepTwo';
import {StepSelectedProps} from './types';

export const StepSelected: FC<StepSelectedProps> = ({status}) => {
  switch (status) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    default:
      return <h1>Not Step</h1>;
  }
};
