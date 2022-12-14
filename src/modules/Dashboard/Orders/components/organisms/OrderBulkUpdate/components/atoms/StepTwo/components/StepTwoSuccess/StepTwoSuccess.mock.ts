import {MassiveVerification} from 'services/models';

export const successData: MassiveVerification = {
  success: [
    {
      sequenceId: '000090593',
      typification: '',
      orderId: '1234-5678-9012-3456',
      from: 'CONFIRMED',
      to: 'SHIPPED',
    },
    {
      sequenceId: '000090594',
      typification: '',
      orderId: '1234-5678-9012-3456',
      from: 'SHIPPED',
      to: 'DELIVERED',
    },
    {
      sequenceId: '000090595',
      typification: '',
      orderId: '1234-5678-9012-3456',
      from: 'RETURNED',
      to: 'SHIPPED',
    },
    {
      sequenceId: '000090595',
      typification: '',
      orderId: '1234-5678-9012-3456',
      from: 'PARTIALLY_RETURNED',
      to: 'SHIPPED',
    },
  ],
  errors: [],
};
