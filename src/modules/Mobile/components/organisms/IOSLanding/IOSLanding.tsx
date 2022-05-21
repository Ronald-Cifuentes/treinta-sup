import {FC} from 'react';
import {Typography} from '@30sas/web-ui-kit-core';
import {Trans, useTranslation} from 'react-i18next';

import {useTheme} from 'hooks';

import {Container} from '../../atoms';
import {LogoTreina, PreviewImage, Banner} from '../../molecules';

export const IOSLanding: FC = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  return (
    <Container container display="flex">
      <LogoTreina />
      <PreviewImage image="assets/preview_web_app.png" />
      <Banner backgroundColor={theme.colors.primary[200] as string}>
        <Typography>
          <Trans
            defaults={t('landing-mobile.ios-banner')}
            components={{bold: <b />}}
          />
        </Typography>
      </Banner>
    </Container>
  );
};
