import {ChangeEvent, FC, useEffect, useState} from 'react';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import {useProducts} from 'hooks/useInventory';
import {Backdrop} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';
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
  const {t} = useTranslation();
  const [itemsByPage, setItemsByPage] = useState(dropDownDefaultValue);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState<number>(0);
  const [store, setStore] = useState<string>(
    t('inventory.select-stores-default'),
  );
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const {dataProducts, refetchProducts} = useProducts({
    page,
    size: itemsByPage,
    categoryId: categories,
    keyword: search,
    warehouseId: store,
  });

  useEffect(() => {
    refetchProducts().then(() => {
      setLoading(false);
    });
  }, [itemsByPage, page, refetchProducts, categories, store]);

  useEffect(() => {
    if (search.length == 0) {
      refetchProducts();
    }
  }, [search, refetchProducts]);

  const handleSpecialPagination = (
    _event: ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPage(value);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  const handleBlur = (): void => {
    refetchProducts();
  };

  const handleCategories = (e: ChangeEvent<HTMLSelectElement>): void => {
    setCategories(parseInt(e.target.value));
  };
  const handleStore = (e: ChangeEvent<HTMLSelectElement>): void => {
    setStore(e.target.value);
  };

  return (
    <div data-testid="inventory-list">
      <DashboardLayout
        title=""
        fancyLineProps={LINE_PROPS}
        sizeFancyLine="0.5px">
        <InventoryContainer>
          <SectionSearchCtrls
            searchOnBlur={handleBlur}
            searchOnChange={handleSearch}
            searchValue={search}
          />
          <SectionCategoryAndStore
            handleCategories={handleCategories}
            handleStore={handleStore}
          />
          <SpecialTableWithPagination
            columns={columns}
            formattedData={dataProducts.items}
            dropDownDefaultValue={dropDownDefaultValue}
            setItemsByPage={setItemsByPage}
            handleSpecialPagination={handleSpecialPagination}
            itemsByPage={itemsByPage}
            totalItems={Products?.pagination?.itemsNumber}
          />
        </InventoryContainer>
        <Backdrop open={loading} />
      </DashboardLayout>
    </div>
  );
};
