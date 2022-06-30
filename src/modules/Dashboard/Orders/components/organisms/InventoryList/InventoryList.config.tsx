import {GridColDef} from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nombre',
    width: 200,
  },
  {
    field: 'sku',
    headerName: 'SKU',
    width: 200,
  },
  {
    field: 'availableUnits',
    headerName: 'Unids disponibles',
    width: 140,
  },
  {
    field: 'unitPrice',
    headerName: 'Precio unitario',
    width: 180,
  },
  {
    field: 'category',
    headerName: 'Categoría',
    width: 160,
  },
  {
    field: 'discount',
    headerName: 'Descuento',
    width: 100,
  },
  {
    field: 'detail',
    headerName: 'Detalle',
    width: 90,
  },
];
