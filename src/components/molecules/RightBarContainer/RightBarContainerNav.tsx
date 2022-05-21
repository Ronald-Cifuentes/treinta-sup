import {FC} from 'react';
import {Grid} from '@30sas/web-ui-kit-core';

import {RightBarTitleNav} from 'components/atoms';

export const RightBarContainerNav: FC<{
  title: string;
}> = ({title, children}) => (
  <Grid container spacing={2} alignItems="center">
    <RightBarTitleNav title={title} />
    {children}
  </Grid>
);
