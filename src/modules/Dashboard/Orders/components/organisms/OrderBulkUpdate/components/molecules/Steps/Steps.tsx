/* eslint-disable no-console */
/* eslint-disable max-lines */
import {Grid} from '@30sas/web-ui-kit-core';
import {ACTIONS, useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {BottomNav, GoBackButton, NavBar} from '../../../OrderBulkUpdate.styled';
import {ButtonStep} from '../../atoms/ButtonStep';
import {OrderBulkUpdateSteps} from '../../atoms/OrderBulkUpdateSteps';
import {StepSelected} from '../StepSelected';
import {
  Help,
  HelpLink,
  HelpPlayIcon,
  HelpQuestionIcon,
  HelpStrong,
  StepsContainer,
} from './Steps.styled';
import {StepsProps} from './types';

export const Steps: FC<StepsProps> = ({
  dataTestId = 'steps-test',
  dataTestIdBtnGoBack = 'btn-go-back-test',
  dataTestIdBtnStep = 'btn-step-test',
}) => {
  const {t} = useTranslation();
  const {state, dispatch} = useOrderBulkUpdate();
  const {isValid, step} = state;

  useEffect(() => {
    if (step < 0) {
      dispatch({type: ACTIONS.SET_STEP, payload: {step: 0}});
    }
    if (step > 1) {
      dispatch({type: ACTIONS.SET_STEP, payload: {step: 1}});
    }
  }, [dispatch, step]);

  const handleGoBackButton = (): void => {
    dispatch({type: ACTIONS.SET_STEP, payload: {step: 0}});
    dispatch({
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
  };

  return (
    <StepsContainer data-testid={dataTestId}>
      <NavBar>
        <GoBackButton
          data-testid={dataTestIdBtnGoBack}
          onClick={handleGoBackButton}
        />
        {t('order-bulk-update.button-go-back')}
      </NavBar>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        justifyContent="center"
        alignItems="center">
        <Help>
          <HelpQuestionIcon />
          <HelpStrong>{t('order-bulk-update.help.text-review')}</HelpStrong>
          {t('order-bulk-update.help.text-learn')}
          <HelpLink target="_blank" rel="noreferrer">
            <HelpPlayIcon />
            {t('order-bulk-update.help.text-link')}
          </HelpLink>
        </Help>
        <OrderBulkUpdateSteps passed={step} />
        <StepSelected status={step} />
      </Grid>
      <BottomNav>
        <ButtonStep dataTestId={dataTestIdBtnStep} disabled={!isValid} />
      </BottomNav>
    </StepsContainer>
  );
};
