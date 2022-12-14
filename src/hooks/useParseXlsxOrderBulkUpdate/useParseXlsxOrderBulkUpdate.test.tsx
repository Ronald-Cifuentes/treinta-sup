import {FileDrop} from '@30sas/web-ui-kit-core';
import {cleanup, fireEvent, screen} from '@testing-library/react';
import {renderHook} from '@testing-library/react-hooks';
import {ACTIONS} from 'context/OrderBulkUpdateContext';
import {FileRejection} from 'react-dropzone';
import {renderTheme} from '__tests__/renderTheme';
import {useParseXlsxOrderBulkUpdate} from './useParseXlsxOrderBulkUpdate';
import {arrTest1} from './useParseXlsxOrderBulkUpdate.mock';

const labels = {
  normal: {
    mainText: 'Esperando',
    endText: {
      text: 'o',
      linkText: 'Muevete.xlsx',
    },
  },
  error: {
    title: 'Error!',
    mainText: 'Oops algo ha salido mal',
    endText: {
      text: 'Que pasa con tigo?',
      linkText: 'Empty',
    },
  },
  success: {
    mainText: 'Exito!',
    endText: {
      text: 'Tu archivo cargó XD',
      linkText: 'Este_es_tu_archivo.xlsx',
    },
  },
  info: {
    title: 'Info',
    mainText: 'More INFO',
    endText: {
      text: 'o ',
      linkText: 'Info.xlsx',
    },
    finaleText: 'Info final',
  },
};

const dispatch = jest.fn(arg => arg);

jest.mock('firebase/auth', () => ({getAuth: jest.fn(() => ({}))}));

jest.mock('context/OrderBulkUpdateContext', () => ({
  useOrderBulkUpdate: () => ({
    dispatch,
  }),
  ACTIONS: {
    UPLOAD_FILE_RESET: 'UPLOAD_FILE_RESET',
    UPLOAD_FILE_SUCCESS: 'UPLOAD_FILE_SUCCESS',
    UPLOAD_FILE_ERROR: 'UPLOAD_FILE_ERROR',
    SET_IS_VALID: 'SET_IS_VALID',
    SET_CONTENT: 'SET_CONTENT',
  },
}));

const GenerateFile = (arr: unknown[][]): File =>
  new File(
    [
      arr
        .map(
          x =>
            Object.entries(x)
              .map(y => y[1])
              .join(';') + '\n\r',
        )
        .join(''),
    ],
    'Test.xlsx',
    {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,',
    },
  );

describe('useParseXlsxOrderBulkUpdate', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('#1. Estado inicial de la carga', async () => {
    const file = GenerateFile(arrTest1 as unknown as unknown[][]);
    const {result} = renderHook(() => useParseXlsxOrderBulkUpdate());
    const {onFilesChange} = result.current;

    const handleDeleteFile = (): null => null;

    renderTheme(
      <FileDrop
        labels={labels}
        files={[]}
        filesCallback={onFilesChange}
        deleteFile={handleDeleteFile}
        allowFileTypes=".xlsx"
        maxSize={5 * 1024 * 1024}
        status="normal"
        loading={false}
        dataTestId="file-drop"
        dataTestIdInput="file-drop-massive-load"
        dataTestIdDeleteButton="file-drop-delete-massive-save"
      />,
    );

    const input = screen.getByTestId('file-drop-massive-load');

    Object.defineProperty(input, 'files', {
      value: [file],
    });

    fireEvent.change(input);
    const preview = await screen.findByText('Esperando');
    expect(preview).toBeInTheDocument();

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ACTIONS.UPLOAD_FILE_RESET,
    });

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ACTIONS.SET_CONTENT,
      payload: {file},
    });
  });

  test('#2. Carga de archivo exitosa', async () => {
    const file = GenerateFile(arrTest1 as unknown as unknown[][]);
    const {result} = renderHook(() => useParseXlsxOrderBulkUpdate());
    const {onFilesChange} = result.current;

    const handleDeleteFile = (): null => null;

    renderTheme(
      <FileDrop
        labels={labels}
        files={[]}
        filesCallback={onFilesChange}
        deleteFile={handleDeleteFile}
        allowFileTypes=".xlsx"
        maxSize={5 * 1024 * 1024}
        status="success"
        loading={false}
        dataTestId="file-drop"
        dataTestIdInput="file-drop-massive-load"
        dataTestIdDeleteButton="file-drop-delete-massive-save"
      />,
    );

    const input = screen.getByTestId('file-drop-massive-load');

    Object.defineProperty(input, 'files', {
      value: [file],
    });

    fireEvent.change(input);
    const preview = await screen.findByText('Exito!');
    expect(preview).toBeInTheDocument();

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ACTIONS.UPLOAD_FILE_RESET,
    });

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ACTIONS.SET_CONTENT,
      payload: {file},
    });
  });

  test('#3. Carga de archivo erronea', async () => {
    const {result} = renderHook(() => useParseXlsxOrderBulkUpdate());
    const {onFilesChange} = result.current;

    const handleDeleteFile = (): null => null;

    renderTheme(
      <FileDrop
        labels={labels}
        files={[]}
        filesCallback={onFilesChange}
        deleteFile={handleDeleteFile}
        allowFileTypes=".xlsx"
        maxSize={5 * 1024 * 1024}
        status="error"
        loading={false}
        dataTestId="file-drop"
        dataTestIdInput="file-drop-massive-load"
        dataTestIdDeleteButton="file-drop-delete-massive-save"
      />,
    );

    const input = screen.getByTestId('file-drop-massive-load');

    Object.defineProperty(input, 'files', {
      value: [
        new Blob([], {
          type: 'application/pdf',
        }),
      ],
    });

    fireEvent.change(input);
    const preview = await screen.findByText('Error!');
    expect(preview).toBeInTheDocument();

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ACTIONS.UPLOAD_FILE_RESET,
    });

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      payload: {
        error: {
          errorMessage: 'Error archivo invalido.',
          files: [
            new Blob([], {
              type: 'application/pdf',
            }),
          ],
        },
      },
      type: ACTIONS.UPLOAD_FILE_ERROR,
    });

    expect(dispatch).toHaveBeenNthCalledWith(3, {
      type: ACTIONS.UPLOAD_FILE_SUCCESS,
    });

    expect(dispatch).toHaveBeenNthCalledWith(4, {
      payload: {isValid: true},
      type: 'SET_IS_VALID',
    });
  });

  test('#4. invalidFile', () => {
    const {result} = renderHook(() => useParseXlsxOrderBulkUpdate());

    result.current.onFilesChange(
      [] as File[],
      [
        {
          file: [] as unknown as File,
          errors: [{message: '', code: ''}],
        } as FileRejection,
      ] as FileRejection[],
    );

    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
  });
});
