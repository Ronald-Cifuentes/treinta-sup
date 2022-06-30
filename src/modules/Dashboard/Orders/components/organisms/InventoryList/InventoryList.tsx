import {ChangeEvent, FC, useState} from 'react';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import {SectionSearchCtrls} from '../../molecules/SectionSearchCtrls';
import {SectionCategoryAndStore} from '../../molecules/SectionCategoryAndStore';
import {InventoryListTypes} from './types';
import {InventoryContainer} from './InventoryList.styled';
import {columns} from './InventoryList.config';
import {Products} from './InventoryList.mock';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

const dropDownDefaultValue = 25;

export const InventoryList: FC<InventoryListTypes> = () => {
  const [itemsByPage, setItemsByPage] = useState(dropDownDefaultValue);
  const [page, setPage] = useState(1);

  const handleSpecialPagination = (
    _event: ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPage(value);
  };

  const handleCategories = (): void => {};
  const handleStore = (): void => {};

  return (
    <DashboardLayout
      data-testid="inventory-list"
      title=""
      fancyLineProps={LINE_PROPS}
      sizeFancyLine="0.5px">
      <InventoryContainer>
        <SectionSearchCtrls />
        <SectionCategoryAndStore
          handleCategories={handleCategories}
          handleStore={handleStore}
        />
        <SpecialTableWithPagination
          columns={columns}
          formattedData={Products.items}
          dropDownDefaultValue={dropDownDefaultValue}
          setItemsByPage={setItemsByPage}
          handleSpecialPagination={handleSpecialPagination}
          itemsByPage={itemsByPage}
          totalItems={Products?.pagination?.itemsNumber}
        />
      </InventoryContainer>
    </DashboardLayout>
  );
};
