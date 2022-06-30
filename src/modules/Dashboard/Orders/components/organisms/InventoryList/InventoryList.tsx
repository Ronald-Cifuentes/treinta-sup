import {FC} from 'react';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import {SectionSearchCtrls} from '../../molecules/SectionSearchCtrls';
import {SectionCategoryAndStore} from '../../molecules/SectionCategoryAndStore';
import {InventoryListTypes} from './types';
import {InventoryContainer} from './InventoryList.styled';
import {columns} from './InventoryList.config';

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
    <InventoryContainer>
      <SectionSearchCtrls />
      <SectionCategoryAndStore />
      <SpecialTableWithPagination columns={columns} />
    </InventoryContainer>
  </DashboardLayout>
);
