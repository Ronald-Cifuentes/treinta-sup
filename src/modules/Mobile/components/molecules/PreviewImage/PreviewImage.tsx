import {FC} from 'react';
import {Grid} from '@30sas/web-ui-kit-core';

import {useTheme} from 'hooks';

import {PreviewImageProps} from './types';

export const PreviewImage: FC<PreviewImageProps> = ({image}) => {
  const theme = useTheme();

  return (
    <Grid item flexGrow={1} marginTop={theme.utils.spacing(2)} height="100vh">
      <img src={image} width="100%" />
    </Grid>
  );
};
