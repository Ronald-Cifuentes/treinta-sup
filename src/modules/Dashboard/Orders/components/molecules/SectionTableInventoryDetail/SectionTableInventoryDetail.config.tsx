import {GridColDef} from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

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
    field: 'isVisible',
    headerName: 'Es visible',
    width: 200,
    renderCell: params => (
      <div>
        {params.value ? (
          <CheckCircleIcon style={{color: 'green'}} />
        ) : (
          <CancelIcon style={{color: 'red'}} />
        )}
      </div>
    ),
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
