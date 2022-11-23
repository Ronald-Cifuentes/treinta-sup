import {ACTIONS} from 'context/OrderBulkUpdateContext';
import {FileRejection} from 'react-dropzone';
import {useParseXlsxOrderBulkUpdate} from './useParseXlsxOrderBulkUpdate';

const dispatch = jest.fn(arg => arg);

jest.mock('context/OrderBulkUpdateContext', () => ({
  useOrderBulkUpdate: () => ({
    dispatch,
  }),
  ACTIONS: {
    UPLOAD_FILE_RESET: 'UPLOAD_FILE_RESET',
    UPLOAD_FILE_SUCCESS: 'UPLOAD_FILE_SUCCESS',
    UPLOAD_FILE_ERROR: 'UPLOAD_FILE_ERROR',
    SET_IS_VALID: 'SET_IS_VALID',
  },
}));

class FileReaderMock {
  DONE = FileReader.DONE;
  EMPTY = FileReader.EMPTY;
  LOADING = FileReader.LOADING;
  readyState = 0;
  error: FileReader['error'] = null;
  result: FileReader['result'] = null;
  abort = jest.fn();
  addEventListener = jest.fn();
  dispatchEvent = jest.fn();
  onabort = jest.fn();
  onerror = jest.fn();
  onload = jest.fn();
  onloadend = jest.fn();
  onloadprogress = jest.fn();
  onloadstart = jest.fn();
  onprogress = jest.fn();
  readAsArrayBuffer = jest.fn();
  readAsBinaryString = jest.fn();
  readAsDataURL = jest.fn();
  readAsText = jest.fn();
  removeEventListener = jest.fn();
}

describe('useParseXlsxOrderBulkUpdate', () => {
  const file = new Blob(['Test'], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,',
  });
  const fileReader = new FileReaderMock();
  jest.spyOn(window, 'FileReader').mockImplementation(() => fileReader);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('#1. validFile', () => {
    fileReader.result = 'file content';
    fileReader.addEventListener.mockImplementation((_, fn) => fn());

    const {onFilesChange} = useParseXlsxOrderBulkUpdate();
    onFilesChange([file] as File[], [] as FileRejection[]);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ACTIONS.UPLOAD_FILE_SUCCESS,
      payload: {
        file: new Blob(),
        statesRepeated: 0,
      },
    });
  });

  test('#2. invalidFile', () => {
    // eslint-disable-next-line no-console
    console.log = jest.fn();
    const {onFilesChange} = useParseXlsxOrderBulkUpdate();
    onFilesChange(
      [] as File[],
      [
        {file: [] as unknown as File, errors: []} as FileRejection,
      ] as FileRejection[],
    );
    // eslint-disable-next-line no-console
    expect(console.log).toHaveBeenCalledWith('invalidFile', [
      {errors: [], file: []},
    ]);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ACTIONS.UPLOAD_FILE_ERROR,
      payload: {
        error: {
          errorMessage: 'Error archivo invalido.',
        },
      },
    });
  });
});
