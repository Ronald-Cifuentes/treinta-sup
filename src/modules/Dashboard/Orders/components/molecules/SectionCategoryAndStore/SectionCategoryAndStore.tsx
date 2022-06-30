import {SpecialSelect} from 'components/atoms/SpecialSelect';
import {FC} from 'react';
import {
  SectionCategoryAndStoreContainer,
  WrapperCategory,
  WrapperCategoryAndStore,
  WrapperStore,
} from './SectionCategoryAndStore.styled';
import {SectionCategoryAndStoreTypes} from './types';

export const SectionCategoryAndStore: FC<SectionCategoryAndStoreTypes> = () => (
  <SectionCategoryAndStoreContainer data-testid="section-search-ctrls">
    <WrapperCategoryAndStore>
      <WrapperCategory>
        <SpecialSelect />
      </WrapperCategory>
      <WrapperStore>
        <SpecialSelect />
      </WrapperStore>
    </WrapperCategoryAndStore>
  </SectionCategoryAndStoreContainer>
);
