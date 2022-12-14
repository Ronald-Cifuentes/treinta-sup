export interface StatusResponse {
  errors: unknown;
  success: unknown;
}

export interface PropTypesGetOrders {
  page?: number;
  size?: number;
  statusId?: number;
  dateFrom?: string | Date | undefined;
  dateTo?: string | Date | undefined;
  keyword?: string;
}

export type GetMassiveStatusVerificationProps = MassiveStatusVerification[];

export interface MassiveStatusVerification {
  sequenceId: string;
  status: string;
  typification: string;
}

export interface GenericResponse {
  orderId: string;
  sequenceId: string;
  typification: string;
  from: string;
  to: string;
}
export interface GenericResponseWithMsg extends GenericResponse {
  message: string;
}

export interface SetMassiveStatusSave {
  orders: GenericResponse[];
}

export interface ResponseVerification {
  success: GenericResponse[];
  errors: GenericResponseWithMsg[];
}
