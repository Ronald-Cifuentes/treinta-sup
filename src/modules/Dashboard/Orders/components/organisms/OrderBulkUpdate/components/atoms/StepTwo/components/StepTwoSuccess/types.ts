import {GenericResponse} from 'services/suppliers.orders/types';

export interface StepTwoSuccessProps {
  dataTestId?: string;
  // ToDo- Change
  data?: GenericResponse[];
}

export interface SuccessDataFormatted {
  from: string;
  quantity: number;
  to: string;
}

export interface RowStateProps {
  tagLeftColor?: string;
  tagLeftText?: string;
  leftNumberOrders?: string;
  tagRightColor?: string;
  tagRightText?: string;
  dataTestId?: string;
}
