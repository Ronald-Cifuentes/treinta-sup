import {FC} from 'react';

import {Steps} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';

import {InventoryStepsProps} from './types';

export const InventorySteps: FC<InventoryStepsProps> = ({passed}) => {
  const {t} = useTranslation();

  return (
    <Steps
      label={[
        t('bulk-upload.upload-inventory'),
        t('bulk-upload.revision-inventory'),
        t('bulk-upload.load-images'),
      ]}
      $backgroundCompletedType="300"
      $circleColorInactiveType="400"
      passed={passed}
      count={[1, 2, 3]}
      containerProps={{
        display: 'flex',
        justifyContent: 'center',
      }}
    />
  );
};
