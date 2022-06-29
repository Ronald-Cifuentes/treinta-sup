import {getCountry} from '@30sas/web-ui-kit-utils';
import {GridColDef} from '@mui/x-data-grid';
import NumberFormat from 'react-number-format';
import {Counter} from '../../atoms/Counter';
import {PriceInputControl} from '../../atoms/PriceInputControl';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nombre',
    width: 220,
  },
  {
    field: 'sku',
    headerName: 'Sku',
    width: 150,
  },
  {
    field: 'quantityOrdered',
    headerName: 'Cantidad ordenada',
    width: 90,
  },
  {
    field: 'quantityToDispatch',
    headerName: 'Cantidad a despachar',
    width: 120,
    renderCell: params => <Counter value={params.value} />,
  },
  {
    field: 'initialPrice',
    headerName: 'Precio original del producto',
    type: 'number',
    width: 180,
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
    field: 'discount',
    headerName: 'Descuento',
    type: 'number',
    width: 120,
    renderCell: params => (
      <PriceInputControl initialValue={params.value} country={getCountry(1)} />
    ),
  },
  {
    field: 'totalPrice',
    headerName: 'Precio total',
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
    field: 'image',
    headerName: '          ',
    width: 100,
    renderCell: params => (
      <a href={params.value} target="blank">
        Ver imagen
      </a>
    ),
  },
];
