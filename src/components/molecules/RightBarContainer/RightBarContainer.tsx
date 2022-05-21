import {FC} from 'react';
import {Grid} from '@30sas/web-ui-kit-core';

import {RightBarTitle} from 'components/atoms';

import {RightBarContainerProps} from './types';

export const RightBarContainer: FC<RightBarContainerProps> = ({
  title,
  children,
  onBeforeExit,
  dataTestId = 'default_rightBarContainer',
  dataTestIdBackButton = 'default_rightBarContainer_button_back',
  dataTestIdCloseButton = 'default_rightBarContainer_button_close',
}) => (
  <Grid container spacing={2} alignItems="center" data-testid={dataTestId}>
    <RightBarTitle
      title={title}
      onBeforeExit={onBeforeExit}
      dataTestIdBackButton={dataTestIdBackButton}
      dataTestIdCloseButton={dataTestIdCloseButton}
    />
    {children}
  </Grid>
);
