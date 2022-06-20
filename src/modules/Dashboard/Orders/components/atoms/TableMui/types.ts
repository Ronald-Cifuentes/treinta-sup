import { GridColDef, GridSelectionModel } from '@mui/x-data-grid';

export interface PropTypesTableMui {
  formattedData?: Array<any>;
  pageSize?: number;
  handleGrid?: (selectionModel: GridSelectionModel) => void;
  columns?: GridColDef[];
  checkboxSelection?: boolean;
}
