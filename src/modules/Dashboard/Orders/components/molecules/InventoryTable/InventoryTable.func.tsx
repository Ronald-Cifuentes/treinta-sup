import {TFunction} from 'i18next';
import {ReactNode} from 'react';

export const getAlertContent = (t: TFunction): ReactNode => (
  <>
    {t('bulk-upload.select-product')}
    <li>
      <strong>{t('bulk-upload.add-image')}</strong>
    </li>
    <li>
      <strong>{t('bulk-upload.check-errors')}</strong>
    </li>
  </>
);
