import {FC} from 'react';

import {Grid} from '@30sas/web-ui-kit-core';
import {ParentContainer} from './EmptyList.styled';
import {EmptyListProps} from './types';

export const EmptyList: FC<EmptyListProps> = ({height = '40vh'}) => (
  <ParentContainer container style={{height}}>
    <Grid item xs={12} data-testid="orders_component_emptyList" />
  </ParentContainer>
);
