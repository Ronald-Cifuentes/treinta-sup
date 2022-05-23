import {FC} from 'react';

import {useTheme} from 'hooks';

import {
  ParentContainer,
} from './EmptyList.styled';
import {EmptyListProps} from './types';
import { Grid } from '@30sas/web-ui-kit-core';

export const EmptyList: FC<EmptyListProps> = ({
  height = '40vh',
}) => {
  const theme = useTheme();
  return (
    <ParentContainer container style={{height}}>
      <Grid item xs={12} data-testid="orders_component_emptyList"></Grid>
    </ParentContainer>
  );
};
