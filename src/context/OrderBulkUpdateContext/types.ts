import {AxiosError, AxiosResponse} from 'axios';
import {States} from 'services/models/States';
import {
  MassiveStatusVerification,
  ResponseVerification,
} from 'services/suppliers.orders/types';

export interface VerifyResponseError {
  errorMessage?: string;
  files?: File[];
}

export type Status = 'normal' | 'error' | 'success' | 'info';

export interface ResponseMassiveSave {
  statusSuccess?: unknown;
  statusError?: unknown;
}

export interface ParametersLoading {
  totalArray: number;
  totalTasks: number;
  numberBatch: number;
}
export interface State {
  isValid: boolean;
  error: VerifyResponseError;
  status: Status;
  files: File[];
  statesRepeated: number;
  states: States[];
  step: number;
  formattedData: MassiveStatusVerification[];
  buttonStep: number;
  responseVerification: ResponseVerification;
  responseMassiveSave: ResponseMassiveSave;
  countResponseMassiveSave: Promise<AxiosResponse | AxiosError>[];
  remainingTasks: number;
  parametersLoading: ParametersLoading;
}

export type Payload = Partial<State> & {
  file?: File;
};

export interface Action {
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: Payload;
}
