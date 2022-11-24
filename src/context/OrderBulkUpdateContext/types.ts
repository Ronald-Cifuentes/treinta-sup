import {States} from 'services/models/States';

export interface VerifyResponseError {
  errorMessage?: string;
}

export type Status = 'normal' | 'error' | 'success' | 'info';

export interface State {
  isValid: boolean;
  error: VerifyResponseError;
  status: Status;
  files: File[];
  statesRepeated: number;
  states: States[];
  step: number;
}

export type Payload = Partial<State> & {
  file?: File;
};

export interface Action {
  type?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: Payload;
}
