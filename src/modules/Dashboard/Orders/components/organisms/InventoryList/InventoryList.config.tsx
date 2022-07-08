import {GridColDef} from '@mui/x-data-grid';
import NumberFormat from 'react-number-format';
import {Link} from 'react-router-dom';
import {HasAgeRestriction} from '../../atoms/HasAgeRestriction';
import LOGO_INACTIVE from '../../../../../../Assets/LOGO_INACTIVE.svg';

export const columns: GridColDef[] = [
  {
    field: 'thumbImgUrl',
    headerName: '',
    width: 50,
    renderCell: params => (
      <img
        src={params.value ? params.value : LOGO_INACTIVE}
        alt="img-product"
      />
    ),
  },
  {
    field: 'name',
    headerName: 'Nombre',
    width: 250,
  },
  {
    field: 'sku',
    headerName: 'SKU',
    width: 160,
  },
  {
    field: 'stock',
    headerName: 'Unids disponibles',
    width: 120,
  },
  {
    field: 'price',
    headerName: 'Precio unitario',
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
    field: 'categoryName',
    headerName: 'Categoría',
    width: 160,
  },
  {
    field: 'hasAgeRestriction',
    headerName: 'Restricción de edad',
    width: 100,
    renderCell: params => <HasAgeRestriction value={params.value} />,
  },
  {
    field: 'weight',
    headerName: 'Peso',
    width: 90,
  },
  {
    field: 'id',
    headerName: 'Detalle',
    width: 90,
    renderCell: params => (
      <Link to={`/inventario/${params.value}`}>Detalle</Link>
    ),
  },
];
