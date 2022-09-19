import {TFunction} from 'i18next';
import {ReactNode} from 'react';
import {ButtonError} from '../Buttons/Buttons.styled';
import {WrapperBtnError} from './StepTwo.styled';

export const getAlertContentSuccess = (t: TFunction): ReactNode => (
  <>{t('bulk-upload.alert-success-uploaded-products')}</>
);
export const getAlertContentError = (
  t: TFunction,
  count: number,
  setModal?: (value: React.SetStateAction<boolean>) => void,
): ReactNode => (
  <>
    <strong>Se han encontrado un total de {count} errores:</strong>
    <li>{t('bulk-upload.alert-error-first-bullet')}</li>
    <li>{t('bulk-upload.alert-error-second-bullet')}</li>
    <WrapperBtnError>
      <ButtonError onClick={() => setModal && setModal(true)}>
        {t('bulk-upload.show-error-detail')}
      </ButtonError>
    </WrapperBtnError>
  </>
);
