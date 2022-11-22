import {FileRejection} from 'react-dropzone';

export interface UseParseXlsxOrderBulkUpdateResponse {
  onFilesChange: (acceptFiles: File[], fileRejections: FileRejection[]) => void;
}
