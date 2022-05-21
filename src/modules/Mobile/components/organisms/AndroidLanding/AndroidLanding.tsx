import {FC} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {Typography, Button} from '@30sas/web-ui-kit-core';

import {useTheme} from 'hooks';
import {Events} from 'config/constants';
import {EventProvider} from 'providers/event-provider';
import {URL_APP_PLAY_STORE} from 'config/constants/parameters';

import {Container} from '../../atoms';
import {LogoTreina, PreviewImage, Banner} from '../../molecules';

export const AndroidLanding: FC = () => {
  const theme = useTheme();
  const {t} = useTranslation();

  const handleClick = (): void =>
    EventProvider.getInstance().logAnalytics(Events.WEB_APP_ANDROID_DOWNLOAD);

  return (
    <Container
      container
      display="flex"
      $backgroundColor={theme.colors.primary[100]}>
      <LogoTreina />
      <PreviewImage image="assets/preview_mobile_app.png" />
      <Banner backgroundColor={theme.colors.neutrals[100] as string}>
        <a href={URL_APP_PLAY_STORE} onClick={handleClick}>
          <img src="assets/google_play.jpg" />
        </a>
        <Typography>
          <Trans
            defaults={t('landing-mobile.android-banner')}
            components={{bold: <b />}}
          />
        </Typography>
        <Button
          label={t('landing-mobile.android-button')}
          onClick={handleClick}
          upper={false}
          href={URL_APP_PLAY_STORE}
          size="medium"
          textColor="primary"
          textColorType="900"
          textVariant="Mediumbold"
          variant="primary"
        />
      </Banner>
    </Container>
  );
};
