import {SpecialSelect} from 'components/atoms/SpecialSelect';
import {OptionsType} from 'hooks/useCommonDocumentTypes';
import {useSuppliersCategories} from 'hooks/useSuppliersCategories';
import {useSuppliersWarehouses} from 'hooks/useSuppliersWarehouses';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SectionCategoryAndStoreContainer,
  WrapperCategory,
  WrapperCategoryAndStore,
  WrapperStore,
} from './SectionCategoryAndStore.styled';
import {SectionCategoryAndStoreTypes} from './types';

export const SectionCategoryAndStore: FC<SectionCategoryAndStoreTypes> = ({
  handleCategories,
  handleStore,
}) => {
  const {t} = useTranslation();

  const {dataCategories} = useSuppliersCategories();
  const {dataWarehouses} = useSuppliersWarehouses();

  const formatCategories: OptionsType[] = dataCategories.items.map(item => ({
    label: `${item.name}`,
    value: `${item.id}`,
  }));

  const formatStores: OptionsType[] = dataWarehouses.items.map(item => ({
    label: `${item.name}`,
    value: `${item.id}`,
  }));

  formatCategories.unshift({label: 'Ver todas las categorías', value: 'null'});

  return (
    <SectionCategoryAndStoreContainer data-testid="section-search-ctrls">
      <WrapperCategoryAndStore>
        <WrapperCategory>
          <SpecialSelect
            onChange={handleCategories}
            defaultSelected={`${t('inventory.select-categories-default')}`}
            options={formatCategories}
          />
        </WrapperCategory>
        <WrapperStore>
          <SpecialSelect
            onChange={handleStore}
            defaultSelected={`${t('inventory.select-stores-default')}`}
            options={formatStores}
          />
        </WrapperStore>
      </WrapperCategoryAndStore>
    </SectionCategoryAndStoreContainer>
  );
};
