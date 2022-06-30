import {Tag} from '@30sas/web-ui-kit-core';
import {GridColDef} from '@mui/x-data-grid';
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom';
import {OrderStatusTags} from './OrderList.const';
import {WrapperId} from './OrderList.styled';

export const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 100,
    renderCell: params => <WrapperId>{params.value}</WrapperId>,
  },
  {
    field: 'status',
    headerName: 'Estado',
    width: 160,
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
    width: 170,
  },
  {
    field: 'phone',
    headerName: 'Teléfono',
    width: 120,
  },
  {
    field: 'createdAt',
    headerName: 'Creado',
    width: 115,
  },
  {
    field: 'updatedAt',
    headerName: 'Actualizada',
    width: 115,
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
    width: 125,
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

export const optionsTabs = [
  {key: 'ALL', label: 'Todos', value: '0'},
  {key: 'PLACED', label: 'Recibidos', value: '1'},
  {key: 'CONFIRM', label: 'Confirmados', value: '7'},
  {key: 'PACKED', label: 'Preparados', value: '2'},
  {key: 'SHIPPED', label: 'En ruta', value: '3'},
  {key: 'DELIVERED', label: 'Entregado', value: '4'},
  {key: 'CANCELED', label: 'Cancelado', value: '5'},
  {
    key: 'RETURNS',
    label: 'Devoluciones',
    value: '10',
    dropdownList: [
      {key: 'RETURN_STARTED', label: 'En proceso de devolución', value: '6'},
      {key: 'RETURNED', label: 'Devuelto', value: '9'},
      {key: 'PARTIALLY_RETURNED', label: 'Devolución parcial', value: '8'},
    ],
  },
];
