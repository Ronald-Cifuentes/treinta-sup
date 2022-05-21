import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@30sas/web-ui-kit-core';

import {useTheme} from 'hooks';

import MaintenanceSvg from './Maintenance.svg';
import {Container, ImageContainer} from './Maintenance.styled';

export const Maintenance: FC = () => {
  const {t} = useTranslation();

  const theme = useTheme();

  return (
    <Container>
      <ImageContainer>
        <img src={MaintenanceSvg} alt="maintenance gears" />
      </ImageContainer>
      <Typography
        margin={theme.utils.spacing(0, 0, 4, 0)}
        variant="XXXLargebold"
        color="secondary"
        colorType="700">
        {t('maintenance.title')}
      </Typography>
      <Typography margin="0" variant="Medium" color="secondary" colorType="700">
        {t('maintenance.text')}
      </Typography>
    </Container>
  );
};
