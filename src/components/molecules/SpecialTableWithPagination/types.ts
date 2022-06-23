import React from 'react';
import {
  GridColDef,
  GridSelectionModel,
  GridValidRowModel,
} from '@mui/x-data-grid';

export interface PropTypesSpecialTableWithPagination {
  formattedData?: GridValidRowModel[];
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
