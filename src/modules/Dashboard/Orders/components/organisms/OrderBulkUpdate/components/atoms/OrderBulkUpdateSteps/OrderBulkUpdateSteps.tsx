import {FC} from 'react';

import {Steps} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';

import {OrderBulkUpdateStepsProps} from './types';

export const OrderBulkUpdateSteps: FC<OrderBulkUpdateStepsProps> = ({
  passed,
  dataTestId = 'steps-order-bulk-update',
}) => {
  const {t} = useTranslation();

  return (
    <Steps
      label={[
        t('order-bulk-update.upload-bulk-update'),
        t('order-bulk-update.revision-bulk-update'),
      ]}
      $backgroundCompletedType="300"
      $circleColorInactiveType="400"
      passed={passed}
      count={[1, 2]}
      containerProps={{
        display: 'flex',
        justifyContent: 'center',
      }}
      dataTestId={dataTestId}
    />
  );
};
