import {GenericResponseWithMsg} from 'services/suppliers.orders/types';

export interface StepTwoErrorProps {
  dataTestId?: string;
  data?: GenericResponseWithMsg[];
}

export interface ToastMessageErrorProps {
  numberError?: number;
  dataTestId?: string;
}
