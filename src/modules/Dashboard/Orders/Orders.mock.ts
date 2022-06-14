import { OrdersResponse } from 'hooks/useOrders';

export const optionsTabs = [
  { key: 'ALL', label: 'Todos', value: '0' },
  { key: 'PLACED', label: 'Recibidos', value: '1' },
  { key: 'CONFIRM', label: 'Confirmados', value: '2' },
  { key: 'PREPARED', label: 'Preparados', value: '3' },
  { key: '', label: 'En ruta', value: '4' },
  { key: 'entregado', label: 'Entregado', value: '5' },
  { key: 'cancelado', label: 'Cancelado', value: '6' },
  {
    key: 'devueltos',
    label: 'Devueltos',
    value: '7',
    dropdownList: [
      { label: 'En proceso de devolución', value: '9' },
      { label: 'Devuelto', value: '10' },
      { label: 'Devolución parcial', value: '11' },
    ]
  },
];

export const orders = [
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
  {
    id: '3fa85f06-5717-4562-b3fc-2c963f66afa6',
    customerName: 'Calos Perez',
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
    id: '3fa85f07-5717-4562-b3fc-2c963f66afa7',
    customerName: 'Andres Zapata',
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
    id: '3fa85f08-5717-4562-b3fc-2c963f66afa8',
    customerName: 'Jhoana Bahamon',
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
    id: '3fa85f09-5717-4562-b3fc-2c963f66afa9',
    customerName: 'Socrates Rodrigez',
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
    id: '3fa85f10-5717-4562-b3fc-2c963f66afa10',
    customerName: 'Juliana Suarez',
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
    id: '3fa85f11-5717-4562-b3fc-2c963f66afa11',
    customerName: 'Diana Castrillon',
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
    id: '3fa85f12-5717-4562-b3fc-2c963f66afa12',
    customerName: 'Emily Ariza',
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
    id: '3fa85f13-5717-4562-b3fc-2c963f66afa13',
    customerName: 'Alejandro Suarez',
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
    id: '3fa85f14-5717-4562-b3fc-2c963f66afa14',
    customerName: 'Jhoan Surita',
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
    id: '3fa85f15-5717-4562-b3fc-2c963f66afa15',
    customerName: 'Alexandra Martinez',
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
    id: '3fa85f16-5717-4562-b3fc-2c963f66afa16',
    customerName: 'David Velez',
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
    id: '3fa85f17-5717-4562-b3fc-2c963f66afa17',
    customerName: 'Juan Cifuentes',
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
    id: '3fa85f18-5717-4562-b3fc-2c963f66afa18',
    customerName: 'Carlos Equiz',
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
    id: '3fa85f19-5717-4562-b3fc-2c963f66afa19',
    customerName: 'Nicolas Pastran',
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
    id: '3fa85f20-5717-4562-b3fc-2c963f66afa20',
    customerName: 'Jhon Mazo',
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
    id: '3fa85f21-5717-4562-b3fc-2c963f66afa21',
    customerName: 'Daniel Contreras',
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

interface x {
  page?: number;
  size?: number;
  statusId?: number;
  dateFrom?: string;
  dateTo?: string;
}

export const ApiMock = ({ page, size }) => {
  const data: OrdersResponse = {
    pagination: {},
    items: [],
  };

  let from = size * (page - 1);
  let to = size * page;

  data.pagination.itemsNumber = orders.length;
  data.pagination.itemsByPage = size;
  data.pagination.pagesNumber = orders.length / page;

  data.items = orders.slice(from, to);

  return {
    data,
  };
};
