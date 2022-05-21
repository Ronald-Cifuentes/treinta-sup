import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Button, Typography} from '@30sas/web-ui-kit-core';

import {ROUTES} from 'routes/types';
import {useTheme, useNavigateI18n} from 'hooks';

import ErrorLogo from './500.svg';
import {ErrorProps} from './types';
import {ImageContainer} from './Error.styled';

export const Error: FC<ErrorProps> = ({resetErrorBoundary}) => {
  const navigate = useNavigateI18n();
  const theme = useTheme();
  const {t} = useTranslation();

  const handleClick = (): void => {
    navigate(ROUTES.HOME, {replace: true});
    resetErrorBoundary();
  };

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
      <ImageContainer>
        <img src={ErrorLogo} alt="404 Not Found" />
      </ImageContainer>
      <Typography
        variant="XXXLargebold"
        margin={theme.utils.spacing(6, 0, 4, 0)}
        color="secondary"
        colorType="700">
        {t('internal-error.title')}
      </Typography>
      <Typography
        margin={theme.utils.spacing(0, 0, 6, 0)}
        variant="Medium"
        color="secondary"
        colorType="700">
        {t('internal-error.subtitle')}
      </Typography>
      <Button
        upper={false}
        fullWidth={false}
        loading={false}
        disabled={false}
        rounded="xl"
        label={t('error-page.home-button-label')}
        variant="primary"
        textColor="primary"
        textColorType="900"
        size="large"
        textVariant="Largebold"
        onClick={handleClick}
      />
    </Box>
  );
};
