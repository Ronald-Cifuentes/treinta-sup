import {GridColDef} from '@mui/x-data-grid';
import {Link} from 'react-router-dom';
import {Tag} from '@30sas/web-ui-kit-core';
import NumberFormat from 'react-number-format';

export const OrderStatusTags = {
  Recibido: 'warning',
  Confirmado: 'info',
  'En ruta': 'success',
  Entregado: 'success',
  Cancelado: 'error',
  Devuelto: 'error',
  Preparado: 'info',
};

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Estado',
    width: 100,
    renderCell: params => (
      <Tag
        label={params?.value.name}
        variant={OrderStatusTags[params.value.name]}
      />
    ),
  },
  {
    field: 'customerName',
    headerName: 'Cliente',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Teléfono',
    width: 140,
  },
  {
    field: 'createdAt',
    headerName: 'Creado',
    width: 110,
  },
  {
    field: 'updatedAt',
    headerName: 'Actualizada',
    width: 110,
  },
  {
    field: 'deliveryDate',
    headerName: 'Entregado',
    width: 110,
  },
  {
    field: 'value',
    headerName: 'Valor',
    type: 'number',
    width: 138,
    renderCell: params => (
      <NumberFormat
        value={params.value}
        className="foo"
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
    ),
  },
  {
    field: 'detail',
    headerName: 'Detalle',
    width: 90,
    renderCell: params => <Link to={`/ordenes/${params.value}`}>Detalle</Link>,
  },
];

export const PointerStates = {
  Recibido: 1,
  Preparando: 2,
  'En Ruta': 3,
  Entregado: 4,
  Cancelado: 5,
  Retornando: 6,
  Confirmado: 7,
  'Devolución parcial': 8,
  Devuelto: 9,
};
