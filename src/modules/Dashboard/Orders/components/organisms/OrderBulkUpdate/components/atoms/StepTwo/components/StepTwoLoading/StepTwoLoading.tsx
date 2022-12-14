import {Divider, Typography} from '@30sas/web-ui-kit-core';
import {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {GeneralAlert} from 'modules/Dashboard/Orders/components/atoms/GeneralAlert';
import {useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {LinearProgressBar} from './LinearProgressBar';
import {StepTwoLoadingProps} from './types';

import {
  Actions,
  StepTwoLoadingContainer,
  TitleStepTwoLoading,
} from './StepTwoLoading.styled';

export const StepTwoLoading: FC<StepTwoLoadingProps> = ({
  dataTestId = 'step-two-loading-test',
}) => {
  const {t} = useTranslation();
  const {
    state: {
      remainingTasks,
      parametersLoading: {totalArray, totalTasks, numberBatch},
    },
  } = useOrderBulkUpdate();

  const [progress, setProgress] = useState(30);
  const count = totalTasks - remainingTasks;
  const numberTotal = totalArray;
  const numberUpdates = count * numberBatch;

  useEffect(() => {
    setProgress((count * 100) / totalTasks);
  }, [count, remainingTasks, totalTasks]);

  return (
    <>
      <TitleStepTwoLoading>
        <Typography
          variant="XLargebold"
          margin="0"
          color="neutrals"
          colorType="900">
          {t('order-bulk-update.orders-update-title')}
        </Typography>
      </TitleStepTwoLoading>
      <StepTwoLoadingContainer data-testid={dataTestId}>
        <Actions space="min">
          <Typography
            variant="Mediumbold"
            margin="0"
            color="neutrals"
            colorType="900">
            {t('order-bulk-update.orders-update-process')}
          </Typography>
        </Actions>
        <Divider />
        <Actions space="min">
          <Typography
            variant="Medium"
            margin="0"
            color="neutrals"
            colorType="900">
            {t('order-bulk-update.order-update-waiting')}
          </Typography>
        </Actions>
        <Actions space="min">
          <GeneralAlert
            type="danger"
            content={
              <Typography
                variant="Medium"
                margin="0"
                color="neutrals"
                colorType="900">
                {t('order-bulk-update.orders-update-message')}
              </Typography>
            }
          />
        </Actions>
        <Actions space="max">
          <LinearProgressBar value={progress} />
          <Typography
            variant="Medium"
            margin="0"
            color="neutrals"
            colorType="900">
            {t('order-bulk-update.orders-update-data', {
              numberUpdates,
              numberTotal,
            })}
          </Typography>
        </Actions>
      </StepTwoLoadingContainer>
    </>
  );
};
