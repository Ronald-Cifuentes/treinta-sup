import {GridColDef} from '@mui/x-data-grid';
import {Link} from 'react-router-dom';
import {Tag} from '@30sas/web-ui-kit-core';
import NumberFormat from 'react-number-format';

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

export const items = [
  {
    id: '3fa85f01-5717-4562-b3fc-2c963f66afa1',
    customerName: 'Viviana Olarte',
    phone: '3204291920',
    createdAt: '2022-05-25T23:11:56.558Z',
    updatedAt: '2022-05-25T23:11:56.558Z',
    deliveryDate: '2022-05-25T23:11:56.558Z',
    value: 1576.45,
    status: {
      id: 1,
      name: 'Recibido',
    },
  },
  {
    id: '3fa85f02-5717-4562-b3fc-2c963f66afa2',
    customerName: 'Camila Mazo',
    phone: '3204291920',
    createdAt: '2022-05-25T23:11:56.558Z',
    updatedAt: '2022-05-25T23:11:56.558Z',
    deliveryDate: '2022-05-25T23:11:56.558Z',
    value: 1576.45,
    status: {
      id: 1,
      name: 'Recibido',
    },
  },
  {
    id: '3fa85f03-5717-4562-b3fc-2c963f66afa3',
    customerName: 'Tatiana Domingez',
    phone: '3204291920',
    createdAt: '2022-05-25T23:11:56.558Z',
    updatedAt: '2022-05-25T23:11:56.558Z',
    deliveryDate: '2022-05-25T23:11:56.558Z',
    value: 1576.45,
    status: {
      id: 1,
      name: 'Recibido',
    },
  },
  {
    id: '3fa85f04-5717-4562-b3fc-2c963f66afa4',
    customerName: 'Juan Camilo Pinto',
    phone: '3204291920',
    createdAt: '2022-05-25T23:11:56.558Z',
    updatedAt: '2022-05-25T23:11:56.558Z',
    deliveryDate: '2022-05-25T23:11:56.558Z',
    value: 1576.45,
    status: {
      id: 1,
      name: 'Recibido',
    },
  },
  {
    id: '3fa85f05-5717-4562-b3fc-2c963f66afa5',
    customerName: 'Diogenes Martinez',
    phone: '3204291920',
    createdAt: '2022-05-25T23:11:56.558Z',
    updatedAt: '2022-05-25T23:11:56.558Z',
    deliveryDate: '2022-05-25T23:11:56.558Z',
    value: 1576.45,
    status: {
      id: 1,
      name: 'Recibido',
    },
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
