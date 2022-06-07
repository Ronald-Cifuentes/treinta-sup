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
      <Divider />
      <Divider />
      <Divider />
    </DashboardLayout>
  );
};
