import {ColorTypesTag} from '@30sas/web-ui-kit-core';
import {GridActionsColDef, GridColDef, GridRowParams} from '@mui/x-data-grid';
import {EventProvider} from 'providers/event-provider';
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom';
import {getUser} from 'utils/infoUser';
import {Tag} from '../../../../../../components/atoms/TagCustom';
import {OrderStatusTags} from './OrderList.const';
import {WrapperId} from './OrderList.styled';

const handleLink = (params: GridRowParams): void => {
  EventProvider.getInstance().logEventAmplitude('b2bs_order_detail_selected', {
    supplier: getUser()?.supplier,
    order_status: params.row.status.name,
  });
};

export const columns: (GridColDef | GridActionsColDef)[] = [
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
        variant={OrderStatusTags[params.value.name] as ColorTypesTag}
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
    width: 115,
  },
  {
    field: 'value',
    headerName: 'Valor',
    type: 'number',
    width: 120,
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
    type: 'actions',
    getActions: (params: GridRowParams) => [
      <Link
        key={params.id}
        to={`/ordenes/${params.row.id}`}
        onClick={() => handleLink(params)}>
        Detalle
      </Link>,
    ],
  },
];

export const optionsTabs = [
  {key: 'ALL', label: 'Todos', value: '0'},
  {key: 'PLACED', label: 'Recibida', value: '1'},
  {key: 'CONFIRMED', label: 'En Proceso', value: '7'},
  {key: 'SHIPPED', label: 'En Ruta', value: '3'},
  {key: 'DELIVERED', label: 'Entregada', value: '4'},
  {key: 'CANCELLED', label: 'Cancelada', value: '5'},
  {key: 'RETURNED', label: 'Devuelta', value: '9'},
  {key: 'PARTIALLY_RETURNED', label: 'Devolución Parcial', value: '8'},
];
