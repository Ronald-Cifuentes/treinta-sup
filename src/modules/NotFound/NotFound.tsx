import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Button, Typography} from '@30sas/web-ui-kit-core';

import {ROUTES} from 'routes/types';
import {useTheme, useNavigateI18n} from 'hooks';

import NotFoundLogo from './404.svg';

export const NotFound: FC = () => {
  const navigate = useNavigateI18n();
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: theme.colors.primary[200],
        height: '100vh',
        textAlign: 'center',
      }}>
      <div style={{width: '384px', height: '164px'}}>
        <img src={NotFoundLogo} alt="404 Not Found" />
      </div>
      <Typography
        variant="XXXLargebold"
        margin={theme.utils.spacing(6, 0, 4, 0)}
        color="secondary"
        colorType="700">
        {t('errors.not-found-page')}
      </Typography>
      <Typography
        margin={theme.utils.spacing(0, 0, 6, 0)}
        variant="Medium"
        color="secondary"
        colorType="700">
        {t('errors.not-found')}
      </Typography>
      <Button
        upper={false}
        fullWidth={false}
        loading={false}
        disabled={false}
        rounded="xl"
        label={t('not-found-page.home-button-label')}
        variant="primary"
        textColor="primary"
        textColorType="900"
        size="large"
        textVariant="Largebold"
        onClick={(): void => navigate(ROUTES.HOME)}
      />
    </Box>
  );
};
