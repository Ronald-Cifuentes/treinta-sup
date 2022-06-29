import {DataDetailTypes} from 'services/models';

export const detail: DataDetailTypes = {
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
    locationId: 3,
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

export const objOrder = {
  appliedDiscount: 0,
  customer: {
    name: '',
    lastName: '',
    document: '5225',
    email: 'test3011marcus@gmail.com',
    documentType: 'NIT',
    documentTypeId: 3,
    storesInvoicingInformationId: '1f1a007b-7532-4938-8e21-6935339af6e4',
  },
  location: {
    locationId: 1,
    name: 'Bogotá D.C.',
    address: 'Calle 13',
    additionalInformation: 'cacscscs',
    contactPhone: '1221545484',
  },
  products: [
    {
      id: 'af9e49b4-40e3-4e78-b01d-c98ead51e994',
      externalId: null,
      warehouseName: 'Treinta Montevideo MU - Bogotá',
      warehouseAddress: 'Calle 17a # 69B - 74',
      sku: '2208001000',
      name: 'Bolsa Basura Tzo Clean Bio Roll 43 X 48',
      price: 3500,
      discountValue: 3500,
      baseValue: 0,
      value: 3500,
      quantity: 27,
      initialQuantity: 27,
      warehouseProductId: 'db34abe2-0404-4f6c-aefe-3a989846dbef',
    },
  ],
};
