import {FileRejection} from 'react-dropzone';
import {DataVerify} from 'services/models/States';

export type OnFilesChange = (
  acceptFiles: File[],
  fileRejections: FileRejection[],
) => void;

export interface UseParseXlsxOrderBulkUpdateResponse {
  onFilesChange: OnFilesChange;
}

export interface StatesFile extends DataVerify {}
