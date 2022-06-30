import {FC} from 'react';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {InventoryListTypes} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const InventoryList: FC<InventoryListTypes> = () => (
  <DashboardLayout
    data-testid="inventory-list"
    title=""
    fancyLineProps={LINE_PROPS}
    sizeFancyLine="0.5px">
    ProductList
  </DashboardLayout>
);
