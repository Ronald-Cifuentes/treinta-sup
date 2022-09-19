import {TFunction} from 'i18next';
import {ReactNode} from 'react';

export const getAlertContentInfo = (t: TFunction): ReactNode => (
  <>
    <i>{t('bulk-upload.alert-info-constrains-load-images-1')}</i>
    <br />
    <i>{t('bulk-upload.alert-info-constrains-load-images-2')}</i>
  </>
);
