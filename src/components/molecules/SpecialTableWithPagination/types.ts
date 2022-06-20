import React from 'react';
import { GridColDef, GridSelectionModel } from '@mui/x-data-grid';

export interface PropTypesSpecialTableWithPagination {
  formattedData?: Array<any>;
  dropDownDefaultValue?: number;
  setItemsByPage?: (value: number) => void;
  itemsByPage?: number;
  handleSpecialPagination?: (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => void;
  totalItems?: number;
  ctrlButtons?: React.ReactElement;
  handleGrid?: (selectionModel: GridSelectionModel) => void;
  columns?: GridColDef[];
  checkboxSelection?: boolean;
}
