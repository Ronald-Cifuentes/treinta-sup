import {FC} from 'react';
import {BalanceCard, Divider, VariantsCard} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {SuccessPlanIcon} from '@30sas/web-ui-kit-icons';

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

function createData(
  id: string,
  status: string,
  customer: string,
  phone: number,
  createdAt: string,
  updatedAt: string,
  deliveryDate: string,
  value: number,
) {
  return {
    id,
    status,
    customer,
    phone,
    createdAt,
    updatedAt,
    deliveryDate,
    value,
  };
}

const rows = [
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
  createData(
    'A159845',
    'Entregado',
    'Carlos Perez',
    3015918524,
    '04/05/2022',
    '04/05/2022',
    '04/05/2022',
    1500.5,
  ),
];

export const Orders: FC = () => {
  const {t} = useTranslation();

  return (
    <DashboardLayout
      title={t('orders.title')}
      fancyLineProps={LINE_PROPS}
      sizeFancyLine="0.5px">
      <BalanceCard
        backgroundIconColor="success"
        backgroundIconColorType="100"
        icon={SuccessPlanIcon}
        iconColor="success"
        iconColorType="400"
        itemBottom={{
          label: '500 ventas por cobrar',
          subLabel: '20 clientes',
          value: '305000585',
        }}
        labelColor="success"
        labelColorType="400"
        variant={VariantsCard.DEBT}
      />
      <Divider></Divider>
      <Divider></Divider>
      <Divider></Divider>
    </DashboardLayout>
  );
};
