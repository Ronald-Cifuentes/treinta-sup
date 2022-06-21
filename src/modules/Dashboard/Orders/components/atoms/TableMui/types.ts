import {
  GridColDef,
  GridSelectionModel,
  GridValidRowModel,
} from '@mui/x-data-grid';

export interface PropTypesTableMui {
  formattedData?: GridValidRowModel[];
  pageSize?: number;
  handleGrid?: (selectionModel: GridSelectionModel) => void;
  columns?: GridColDef[];
  checkboxSelection?: boolean;
}
