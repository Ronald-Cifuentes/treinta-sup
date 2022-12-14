import {
  GridColDef,
  GridRowClassNameParams,
  GridSelectionModel,
  GridValidRowModel,
} from '@mui/x-data-grid';

export interface PropTypesTableMui {
  formattedData?: GridValidRowModel[];
  pageSize?: number;
  handleGrid?: (selectionModel: GridSelectionModel) => void;
  columns?: GridColDef[];
  checkboxSelection?: boolean;
  className?: string;
  getRowClassName?: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ((params: GridRowClassNameParams<any>) => string) | undefined;
}
