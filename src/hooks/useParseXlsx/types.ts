import {FileRejection} from 'react-dropzone';
import {DataVerify} from 'services/models';

export interface ProductFile extends DataVerify {}

export interface UseParseXlsxOutput {
  onFilesChange: (acceptFiles: File[], fileRejections: FileRejection[]) => void;
  massiveSave: () => Promise<void>;
}

export const ERRORS = {
  ERROR_400_CASE_1: 'Client request error',
  ERROR_400_MSG_1: 'Hay errores en los campos',
  ERROR_400_MSG_DEFAULT: 'Error 400 no controlado',
  ERROR_406_CASE_1: 'Not allowed load more 500 records',
  ERROR_406_MSG_1:
    'El inventario supera los 500 registros, intenta cargarlo de nuevo.',
  ERROR_406_MSG_DEFAULT: 'Error 406 no controlado',
  ERROR_409_CASE_1_PART_1: 'There are',
  ERROR_409_CASE_1_PART_2: "sku's duplicates",
  ERROR_409_MSG_1:
    'Estás cargando inventario a más de una bodega, solo se puede cargar una bodega a la vez. Vuelve a cargar el inventario.',
  ERROR_409_MSG_DEFAULT: 'Error 409 no controlado',
};
