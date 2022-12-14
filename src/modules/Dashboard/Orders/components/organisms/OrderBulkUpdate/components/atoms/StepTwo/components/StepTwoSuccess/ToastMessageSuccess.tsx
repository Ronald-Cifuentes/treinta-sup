import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {
  CheckCircleOutlineIconStyled,
  ToastContainer,
} from './StepTwoSuccess.styled';

export const ToastMessageSuccess: FC = () => {
  const {t} = useTranslation();
  return (
    <ToastContainer>
      <CheckCircleOutlineIconStyled />
      <div>{t('order-bulk-update.success-toast-message')}</div>
    </ToastContainer>
  );
};
