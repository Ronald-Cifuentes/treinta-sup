import {FileRejection} from 'react-dropzone';
import {DataVerify} from 'services/models';

export interface ProductFile extends DataVerify {}

export interface UseParseXlsxOutput {
  onFilesChange: (acceptFiles: File[], fileRejections: FileRejection[]) => void;
  massiveSave: () => Promise<void>;
}
