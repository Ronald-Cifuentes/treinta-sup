import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ShieldGameIcon} from '@30sas/web-ui-kit-icons';
import {Grid, Typography, Box} from '@30sas/web-ui-kit-core';

import {useTheme} from 'hooks';
import {LogoTreinta} from 'components/atoms';

export const LogoTreina: FC = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  return (
    <Grid item display="flex" flexDirection="column" alignItems="center">
      <LogoTreinta disabledBeta={true} />
      <Box display="flex" alignItems="center">
        <ShieldGameIcon
          style={{marginRight: 8}}
          fill={theme.colors.gray[700]}
        />
        <Typography variant="XSmallbold" color="gray" colorType="800">
          {t('welcome-view.security')}
        </Typography>
      </Box>
    </Grid>
  );
};
