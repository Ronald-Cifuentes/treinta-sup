export type ActionMessageError = 'create' | 'update' | 'delete' | 'read';

export type EntityMessageError =
  | 'generic'
  | 'product'
  | 'category'
  | 'contact'
  | 'transaction'
  | 'employees';

export interface MessageError {
  message?: string;
  entity?: EntityMessageError;
  action?: ActionMessageError;
}
