import {TFunction} from 'i18next';
import {ReactNode} from 'react';

export const getAlertContentSuccess = (t: TFunction): ReactNode => (
  <>{t('bulk-upload.alert-success-uploaded-products')}</>
);
export const getAlertContentError = (
  t: TFunction,
  count: number,
): ReactNode => (
  <>
    <strong>Se han encontrado un total de {count} errores:</strong>
    <li>{t('bulk-upload.alert-error-first-bullet')}</li>
    <li>{t('bulk-upload.alert-error-second-bullet')}</li>
  </>
);
