import {ACTIONS, useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {FileRejection} from 'react-dropzone';
import {useTranslation} from 'react-i18next';
import {UseParseXlsxOrderBulkUpdateResponse} from './types';
import {parseFile} from './useParseXlsxOrderBulkUpdate.func';

const reviewLength = (arr: unknown[][]): boolean => {
  let element = true;
  for (const item of arr) {
    element = Object.entries(item).length == 3;
    if (!element) {
      break;
    }
  }
  return element;
};

export const useParseXlsxOrderBulkUpdate =
  (): UseParseXlsxOrderBulkUpdateResponse => {
    const {dispatch} = useOrderBulkUpdate();
    const {t} = useTranslation();

    const onReaderLoad = (event: ProgressEvent<FileReader>): void => {
      const ab = event.target?.result;
      const states = parseFile(ab);

      if (
        states &&
        Array.isArray(states) &&
        states?.[1] &&
        Object.values(states?.[1]).length === 3 &&
        reviewLength(states) &&
        Object.values(states?.[1])?.find(item => item == 'Consecutivo*') &&
        Object.values(states?.[1])?.find(item => item == 'Estado*') &&
        Object.values(states?.[1])?.find(item => item == 'Tipificacion') &&
        Object.values(states).length <= 1002
      ) {
        dispatch({type: ACTIONS.UPLOAD_FILE_SUCCESS});
        dispatch({type: ACTIONS.SET_IS_VALID, payload: {isValid: true}});
      } else {
        dispatch({
          type: ACTIONS.UPLOAD_FILE_ERROR,
          payload: {
            error: {
              errorMessage: t('bulk-upload.error-invalid-format'),
            },
          },
        });
      }
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
      const {file} = fileRejections?.[0]
        ? fileRejections[0]
        : {file: undefined};
      dispatch({
        type: ACTIONS.UPLOAD_FILE_ERROR,
        payload: {
          error: {
            errorMessage: 'Error archivo invalido.',
            ...(file && {files: [file]}),
          },
        },
      });
    };

    const validFile = (acceptFiles: File[]): void => {
      const file: File = acceptFiles[0];
      const reader = new FileReader();
      reader.onload = onReaderLoad;
      reader.onerror = onReaderError;
      reader.readAsArrayBuffer(file);
      dispatch({type: ACTIONS.SET_CONTENT, payload: {file}});
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
