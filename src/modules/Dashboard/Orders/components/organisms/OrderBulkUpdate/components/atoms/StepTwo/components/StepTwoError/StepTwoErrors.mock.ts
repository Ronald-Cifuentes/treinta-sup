import {MassiveVerification} from 'services/models';

export const errorsData: MassiveVerification = {
  success: [],
  errors: [
    {
      sequenceId: '000090593',
      typification: '',
      orderId: '1234-5678-9012-3456',
      from: 'CONFIRMED',
      to: 'SHIPPED',
      message: '',
    },
    {
      sequenceId: '000090594',
      typification: '',
      orderId: '1234-5678-9012-3456',
      from: 'SHIPPED',
      to: 'DELIVERED',
      message: '',
    },
    {
      sequenceId: '000090595',
      typification: '',
      orderId: '1234-5678-9012-3456',
      from: 'RETURNED',
      to: 'SHIPPED',
      message: '',
    },
    {
      sequenceId: '000090595',
      typification: '',
      orderId: '1234-5678-9012-3456',
      from: 'PARTIALLY_RETURNED',
      to: 'SHIPPED',
      message: '',
    },
  ],
};
