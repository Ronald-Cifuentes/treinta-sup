import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import ICON_SEARCH from '../../../../../../Assets/ICON_SEARCH.svg';
import {
  EmptyStateSearchContainer,
  EmptyStateSearchImage,
  EmptyStateSearchTextContent,
} from './EmptyStateSearch.styled';
import {EmptyStateSearchProps} from './types';

export const EmptyStateSearch: FC<EmptyStateSearchProps> = () => {
  const {t} = useTranslation();
  return (
    <EmptyStateSearchContainer>
      <EmptyStateSearchImage
        src={ICON_SEARCH}
        alt="ICON_SEARCH"
        className="src"
      />
      <EmptyStateSearchTextContent>
        {t('orders.empty-state.msg-empty')}
      </EmptyStateSearchTextContent>
    </EmptyStateSearchContainer>
  );
};
