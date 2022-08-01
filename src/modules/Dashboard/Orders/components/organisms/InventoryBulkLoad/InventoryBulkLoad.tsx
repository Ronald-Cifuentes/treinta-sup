/* eslint-disable no-console */
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {FC} from 'react';
import {Steps} from './components/molecules';
import {InventoryBulkLoadContainer} from './InventoryBulkLoad.styled';
import {InventoryBulkLoadProps} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const InventoryBulkLoad: FC<InventoryBulkLoadProps> = () => (
  <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
    <InventoryBulkLoadContainer>
      <Steps />
    </InventoryBulkLoadContainer>
  </DashboardLayout>
);
