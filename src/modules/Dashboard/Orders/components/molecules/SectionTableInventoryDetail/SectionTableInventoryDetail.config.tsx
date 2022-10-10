import {GridColDef} from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    field: 'warehouseName',
    headerName: 'Bodega',
    width: 200,
  },
  {
    field: 'stock',
    headerName: 'Unids disponibles',
    width: 200,
  },
  {
    field: 'stockLimit',
    headerName: 'Stock de seguridad',
    width: 200,
  },
  {
    field: 'isOutOfStock',
    headerName: 'Es visible',
    width: 200,
  },
  {
    field: 'discount',
    headerName: 'Descuento',
    type: 'number',
    width: 200,
    headerAlign: 'center',
    renderCell: params => (
      <div>
        {Object.entries(params?.value || {}).length
          ? params.value?.discountDisplay
          : '0%'}
      </div>
    ),
  },
];
