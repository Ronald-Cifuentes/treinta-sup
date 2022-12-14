import {GenericResponse} from 'services/suppliers.orders/types';
import {LinearProgressProps} from '@mui/material/LinearProgress';
export interface StepTwoLoadingProps {
  dataTestId?: string;
  // ToDo- Change
  data?: GenericResponse[];
}

export type LineasProgressBarProps = LinearProgressProps & {
  value: number;
  dataTestId?: string;
};
