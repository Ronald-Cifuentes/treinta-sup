import {GridColDef} from '@mui/x-data-grid';
import NumberFormat from 'react-number-format';
import {FC, useState} from 'react';
import {PriceInput, QuantityInput} from '@30sas/web-ui-kit-core';
import {Detail} from 'services/models';
import {PencilIcon} from '@30sas/web-ui-kit-icons';
import {getCountry} from '@30sas/web-ui-kit-utils';

// <NumberFormat
//   value={params.value}
//   className="foo"
//   displayType="text"
//   thousandSeparator={true}
//   prefix="$"
// />

const PriceInputControl: FC<{initialValue?: number}> = ({initialValue = 0}) => {
  const [value, setValue] = useState(initialValue);
  return (
    <PriceInput
      onChange={e => setValue(e)}
      country={getCountry(1)}
      value={value}
      StartIcon={PencilIcon}
    />
  );
};

export const Counter: FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const updateQuantity = (qnt): void => {
    setQuantity(qnt.target.value);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
      <QuantityInput
        BaseLabel="Agregar"
        colors={{
          backgroundColor: 'gray',
          backgroundGradient: '100',
          borderColor: 'gray',
          borderGradient: '600',
          hoverColor: 'gray',
          hoverGradient: '200',
          textColor: 'secondary',
          textGradient: '700',
        }}
        name="storybook"
        quantity={quantity}
        setQuantity={updateQuantity}
        unit="kg"
      />
    </div>
  );
};

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Nombre',
    width: 150,
  },
  {
    field: 'sku',
    headerName: 'Sku',
    width: 150,
  },
  {
    field: 'quantityOrdered',
    headerName: 'Cantidad ordenada',
    width: 150,
  },
  {
    field: 'quantityToDispatch',
    headerName: 'Cantidad a despachar',
    width: 180,
    renderCell: () => <Counter />,
  },
  {
    field: 'initialQuantity',
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
    renderCell: params => <PriceInputControl initialValue={params.value} />,
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
    renderCell: params => <a href={params.value}>Ver imagen</a>,
  },
];

export const detail: Detail = {
  id: 'a3d3614e-592e-4fa5-9922-3497e1ba0407',
  externalId: null,
  value: 8400,
  appliedDiscount: 0,
  productsValue: 8400,
  phone: '3022183843',
  comments: 'Orden de prueba Nicolas',
  createdAt: '2022-06-17T1:2:00.000-0:00',
  updatedAt: '2022-06-17T1:2:00.000-0:00',
  deliveryDate: '2022-06-10',
  status: {
    id: 1,
    name: 'Recibido',
  },
  customer: {
    name: 'Freddy',
    lastName: 'Martinez',
    document: '000000',
    email: 'freddy@treinta.co',
    documentType: 'Cédula de ciudadanía',
    documentTypeId: 1,
  },
  location: {
    id: 3,
    name: 'Olarte',
    address: 'Calle 4 # 7 -8',
    additionalInformation: 'Casa de Freddy Soacha',
    contactPhone: '3002601',
  },
  products: [
    {
      id: '71ab2505-d93c-5904-bd9e-6592e3cdd7e3',
      externalId: null,
      warehouseName: 'Cali, Palmira, Valle del Cauca',
      warehouseAddress: 'Cl. 1 #2-37',
      sku: '1206000004',
      name: 'Acondicionador Konzil Seda Líquida Caja X 18 Sobres X 25 Ml',
      price: 8400,
      thumbImgUrl:
        'http://firebasestorage.googleapis.com/v0/b/treintaco.appspot.com/o/treinta%2Fstores%2F8c0a904a-487a-4ae6-91ea-8489de74c937%2Finventory%2Ff9009987-57ea-49a9-a30d-a6e6a8f92b76?alt=media&token=5f56cfc3-2616-432a-a050-07e03a895884',
      discountValue: 8400,
      baseValue: 0,
      value: 8400,
      quantity: 1,
      initialQuantity: 1,
      warehouseProductId: 'b1931a59-62a6-4127-bca3-bb1f5818bbf2',
    },
  ],
};
