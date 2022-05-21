import {FC} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {PackageIcon} from '@30sas/web-ui-kit-icons';
import {Grid, Button} from '@30sas/web-ui-kit-core';

import {ROUTES} from 'routes/types';
import {useNavigateI18n, useTheme} from 'hooks';
import {RightBarScreensInventory} from 'config/constants/screens';
import {useDashboard} from 'context/DashboardContext/DashboardContext';

import {ButtonStyled} from '../../atoms';
import {
  TitleSku,
  ContainerText,
  ItemContainer,
  ParentContainer,
  EmptyTypographyStyled,
} from './EmptyList.styled';
import {EmptyListProps} from './types';

export const EmptyList: FC<EmptyListProps> = ({
  text,
  height = '40vh',
  iconSize = '80px',
  marginX = '24px',
  hiddenActions = true,
  isSearchSku = false,
}) => {
  const routerNavigate = useNavigateI18n();
  const {setRightBarOpen, rightBarNavigation} = useDashboard();
  const {navigate} = rightBarNavigation;
  const {t} = useTranslation();
  const theme = useTheme();
  return (
    <ParentContainer container style={{height}}>
      
    </ParentContainer>
  );
};
