import {FileRejection} from 'react-dropzone';

export type OnFilesChange = (
  acceptFiles: File[],
  fileRejections: FileRejection[],
) => void;

export interface UseParseXlsxOrderBulkUpdateResponse {
  onFilesChange: OnFilesChange;
}

export interface HandleObject extends Object {
  [key: string]: unknown;
}

export interface StatesFile {
  [key: string]: HandleObject;
}
