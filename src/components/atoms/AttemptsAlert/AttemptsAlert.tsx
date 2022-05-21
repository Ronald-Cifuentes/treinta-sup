import {FC} from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {Typography} from '@30sas/web-ui-kit-core';
import {WarningCircleIcon} from '@30sas/web-ui-kit-icons';

import {EventProvider} from 'providers/event-provider';
import {Events, SUPPORT_LINK} from 'config/constants';

import {AttemptsAlertProps} from './types';
import {Alert} from './AttemptsAlert.styled';

export const AttemptsAlert: FC<AttemptsAlertProps> = ({
  show,
  phoneNumber,
  origin,
}) => {
  const {t} = useTranslation();
  const handleClick = (): void => {
    EventProvider.getInstance().logEventAmplitude(Events.CTA_ALERT, {
      phoneNumber,
      origin,
    });
    window.open(SUPPORT_LINK, '_blank');
  };
  return show ? (
    <Alert
      onClick={handleClick}
      iconColor="danger"
      textColor="danger"
      Icon={WarningCircleIcon}
      borderColor="danger"
      dataTestId="attempts_alert"
      backgroundColor="danger">
      <Typography color="danger" colorType="700">
        <Trans
          defaults={t('errors.attempts-error')}
          components={{bold: <strong />}}
        />
      </Typography>
    </Alert>
  ) : null;
};
