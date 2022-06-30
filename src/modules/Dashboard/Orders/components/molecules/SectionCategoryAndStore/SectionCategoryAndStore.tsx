import {SpecialSelect} from 'components/atoms/SpecialSelect';
import {OptionsType} from 'hooks/useCommonDocumentTypes';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {optionsCategories, optionsStores} from './SectionCategoryAndStore.mock';
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

  const formatCategories: OptionsType[] = optionsCategories.items.map(item => ({
    label: `${item.name}`,
    value: `${item.id}`,
  }));

  const formatStores: OptionsType[] = optionsStores.items.map(item => ({
    label: `${item.name}`,
    value: `${item.id}`,
  }));

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
            defaultText={`${t('inventory.select-stores-default')}`}
            options={formatStores}
          />
        </WrapperStore>
      </WrapperCategoryAndStore>
    </SectionCategoryAndStoreContainer>
  );
};
