export interface MassiveResponseSuccess {
  to: string;
  typification: string;
  sequenceId: string;
  orderId: string;
  from: string;
}

export interface MassiveResponseError {
  to: string;
  typification: string;
  sequenceId: string;
  orderId: string;
  from: string;
  message: string;
}
export interface MassiveVerification {
  success: MassiveResponseSuccess[];
  errors: MassiveResponseError[];
}
