/* eslint-disable react/jsx-no-useless-fragment */
import {FC, ReactElement} from 'react';
import {Grid} from '@30sas/web-ui-kit-core';

import {RightBarTitleHeader} from 'components/atoms';

import {ContainerChildren} from './RigthBarContainer.styled';

export const RightBarContainerHeader: FC<{
  title: string;
  icon?: ReactElement;
  lineColor?: string;
  lineColorType?: string;
}> = ({
  title,
  icon = <></>,
  lineColor = 'success',
  lineColorType = '400',
  children,
}) => (
  <Grid container spacing={2} alignItems="center" height="stretch">
    <RightBarTitleHeader
      title={title}
      icon={icon}
      lineColor={lineColor}
      lineColorType={lineColorType}
    />
    <ContainerChildren>{children}</ContainerChildren>
  </Grid>
);
