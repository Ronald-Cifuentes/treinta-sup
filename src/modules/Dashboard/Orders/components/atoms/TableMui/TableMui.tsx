import {FC} from 'react';
import {DataGrid} from '@mui/x-data-grid';

import {PropTypesTableMui} from './types';
import {TableMuiRoot} from './TableMui.styled';

const StylesTableMui = {
  border: 0,
  marginTop: '40px',
  webkitBoxShadow: '2px 4px 8px 0px rgba(34, 38, 42, 0.05)',
  mozBoxShadow: '2px 4px 8px 0px rgba(34, 38, 42, 0.05)',
  boxShadow: '2px 4px 8px 0px rgba(34, 38, 42, 0.05)',
  '& .MuiDataGrid-columnHeaders': {
    minHeight: '48px !important',
    maxHeight: '48px !important',
    lineHeight: '48px !important',
  },
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: '#F4F5F6',
    color: '#67737E',
    border: '0',
    borderRadius: '6px 6px 0px 0px',
    padding: '14px',
    lineHeight: '20px',
  },
  '& .MuiDataGrid-cell': {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 16,
    background: 'white',
  },
  '& .MuiDataGrid-columnHeaderCheckbox': {
    padding: '14px 0px',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-menuIconButton': {
    display: 'none',
  },
  '& .MuiDataGrid-iconButtonContainer': {
    display: 'none',
  },
  '& .PrivateSwitchBase-root': {
    padding: 0,
  },
  '& .MuiDataGrid-cellContent': {
    whiteSpace: 'break-spaces',
  },
  // '& .MuiDataGrid-row': {
  //   he
  // }
};

export const TableMui: FC<PropTypesTableMui> = ({
  formattedData,
  pageSize = 8,
  handleGrid,
  columns,
  checkboxSelection,
}) => (
  <TableMuiRoot data-testid="table-mui">
    <DataGrid
      rows={formattedData || []}
      columns={columns || []}
      pageSize={pageSize}
      rowsPerPageOptions={[5]}
      checkboxSelection={checkboxSelection}
      disableSelectionOnClick
      onSelectionModelChange={handleGrid}
      sx={StylesTableMui}
      hideFooter={true}
      autoHeight={true}
    />
  </TableMuiRoot>
);
