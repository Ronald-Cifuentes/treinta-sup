import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import {FC} from 'react';
import {SectionTableInventoryContainer} from './SectionTableInventory.styled';
import {SectionTableInventoryTypes} from './types';

export const SectionTableInventory: FC<SectionTableInventoryTypes> = () => (
  <SectionTableInventoryContainer data-testid="section-search-ctrls">
    <SpecialTableWithPagination />
  </SectionTableInventoryContainer>
);
