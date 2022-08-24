import {FC} from 'react';
import ICON_SEARCH from '../../../../../../Assets/ICON_SEARCH.svg';
import {
  EmptyStateSearchContainer,
  EmptyStateSearchImage,
  EmptyStateSearchTextContent,
} from './EmptyStateSearch.styled';
import {EmptyStateSearchProps} from './types';

export const EmptyStateSearch: FC<EmptyStateSearchProps> = () => (
  <EmptyStateSearchContainer>
    <EmptyStateSearchImage
      src={ICON_SEARCH}
      alt="ICON_SEARCH"
      className="src"
    />
    <EmptyStateSearchTextContent>
      No tienes ordenes asociadas a este número. Intenta con otro ID o número de
      orden.
    </EmptyStateSearchTextContent>
  </EmptyStateSearchContainer>
);
