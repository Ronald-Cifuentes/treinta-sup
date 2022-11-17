import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {FC} from 'react';
import {Steps} from './components/molecules/Steps';
import {OrderBulkUpdateContainer} from './OrderBulkUpdate.styled';
import {OrderBulkUpdateProps} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

export const OrderBulkUpdate: FC<OrderBulkUpdateProps> = ({
  dataTestId = 'order-bulk-update',
}) => (
  <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
    <OrderBulkUpdateContainer data-testid={dataTestId}>
      <Steps />
    </OrderBulkUpdateContainer>
  </DashboardLayout>
);
