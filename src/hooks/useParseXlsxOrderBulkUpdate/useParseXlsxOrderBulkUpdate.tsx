import {ACTIONS, useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {FileRejection} from 'react-dropzone';
import {useTranslation} from 'react-i18next';
import {UseParseXlsxOrderBulkUpdateResponse} from './types';
import {parseFile} from './useParseXlsxOrderBulkUpdate.func';

const reader = new FileReader();

export const useParseXlsxOrderBulkUpdate =
  (): UseParseXlsxOrderBulkUpdateResponse => {
    const {dispatch} = useOrderBulkUpdate();
    const {t} = useTranslation();

    const onReaderLoad = (event: ProgressEvent<FileReader>): void => {
      const ab = event.target?.result;
      const states = parseFile(ab);
      // eslint-disable-next-line no-console
      console.log('onReaderLoad', {event, states});
    };

    const onReaderError = (): void => {
      dispatch({
        type: ACTIONS.UPLOAD_FILE_ERROR,
        payload: {
          error: {
            errorMessage: t('bulk-upload.error-invalid-format'),
          },
        },
      });
    };

    const invalidFile = (fileRejections: FileRejection[]): void => {
      // eslint-disable-next-line no-console
      console.log('invalidFile', fileRejections);
      dispatch({
        type: ACTIONS.UPLOAD_FILE_ERROR,
        payload: {
          error: {
            errorMessage: 'Error archivo invalido.',
          },
        },
      });
    };

    const validFile = (acceptFiles: File[]): void => {
      const file: File = acceptFiles[0];
      dispatch({
        type: ACTIONS.UPLOAD_FILE_SUCCESS,
        payload: {file, statesRepeated: 0},
      });
      reader.onload = onReaderLoad;
      reader.readAsArrayBuffer(file);
      reader.onerror = onReaderError;
    };

    const onFilesChange = (
      acceptFiles: File[],
      fileRejections: FileRejection[],
    ): void => {
      dispatch({
        type: ACTIONS.UPLOAD_FILE_RESET,
      });
      if (fileRejections.length > 0) {
        invalidFile(fileRejections);
      } else {
        validFile(acceptFiles);
      }
    };

    return {onFilesChange};
  };
