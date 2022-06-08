import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@30sas/web-ui-kit-core';
import {useAuth} from 'context/AuthContext';
import {LogoTreinta} from 'components/atoms';
import {CardLayout} from 'components/templates';
import {WhatsappButton} from 'components/molecules';
import {Events, LanguagesMap} from 'config/constants';
import {EventProvider} from 'providers/event-provider';

import {LogoGoogle, ButtonGoogle} from './SignIn.styled';

export const SignIn: FC = () => {
  const {t, i18n} = useTranslation();
  const {googleSignIn} = useAuth();

  return (
    <>
      <CardLayout dataTestId="login-form">
        <LogoTreinta />
        <Typography variant="XXLargebold" color="secondary" colorType="700">
          {t('login.sign-in')}
        </Typography>
        <ButtonGoogle
          dataTestId="signInGoogle_button_logInWithGoogle"
          StartIcon={LogoGoogle}
          label={t('sign-in-google.title')}
          textVariant="Mediumbold"
          upper={false}
          textColor="neutrals"
          fullWidth
          onClick={(): void => {
            EventProvider.getInstance().logAnalytics(Events.LOGIN_GOOGLE);
            EventProvider.getInstance().logEventAmplitude(Events.LOGIN_GOOGLE);
            googleSignIn();
          }}
        />
      </CardLayout>
      <WhatsappButton
        label={t('whatsapp-button.label-login')}
        link={LanguagesMap[i18n.language].WHATSAPP_LINK_LOGIN}
        dataTestId="login_button_whatsApp"
      />
    </>
  );
};
