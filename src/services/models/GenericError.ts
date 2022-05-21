import {AxiosResponse} from 'axios';

export interface GenericError<T> {
  response: AxiosResponse<T>;
}

export interface RequestError {
  path: string;
  status: number;
  message: string;
  timestamp: string;
  reSyncTable: boolean | null;
}
