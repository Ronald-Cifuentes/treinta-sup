import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {ToastErrorContainer} from './StepTwoError.styled';
import {ToastMessageErrorProps} from './types';

export const ToastMessageError: FC<ToastMessageErrorProps> = ({
  numberError = 9999999,
  dataTestId = 'toast-message-id',
}) => {
  const {t} = useTranslation();

  return (
    <ToastErrorContainer data-testid={dataTestId}>
      <strong>
        {t('order-bulk-update.error-toast-message-one') +
          numberError +
          t('order-bulk-update.error-toast-message-two')}
      </strong>
      <li>{t('order-bulk-update.error-change-logic-message')}</li>
      <li>{t('order-bulk-update.error-change-consecutives-message')}</li>
    </ToastErrorContainer>
  );
};
