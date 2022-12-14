import {Grid} from '@30sas/web-ui-kit-core';
import {ACTIONS, useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {ModalConfirm} from 'modules/Dashboard/Orders/components/atoms/ModalConfirm';
import {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {setDataMassive} from '../../../OrderBulkUpdate.func';
import {BottomNav, GoBackButton, NavBar} from '../../../OrderBulkUpdate.styled';
import {ButtonStep} from '../../atoms/ButtonStep';
import {OrderBulkUpdateSteps} from '../../atoms/OrderBulkUpdateSteps';
import {StepSelected} from '../StepSelected';
import {
  HeaderBannerEmpty,
  Help,
  HelpLink,
  HelpPlayIcon,
  HelpQuestionIcon,
  HelpStrong,
  StepsContainer,
} from './Steps.styled';
import {StepsProps} from './types';

const handleButtonStep = ({dispatch, step, setModal}): void => {
  if (step == 0) {
    dispatch({type: ACTIONS.SET_STEP, payload: {step: step + 1}});
  } else if (step == 1) {
    setModal(true);
  }
};

const handleGoBackButton = ({dispatch}): void => {
  dispatch({type: ACTIONS.SET_STEP, payload: {step: 0}});
  dispatch({
    type: ACTIONS.UPLOAD_FILE_RESET,
  });
};

const handleBtnConfirm = ({setModal, state, dispatch, ACTIONS}): void => {
  setModal(() => false);
  setDataMassive({state, dispatch, ACTIONS});
};

export const Steps: FC<StepsProps> = ({
  dataTestId = 'steps-test',
  dataTestIdBtnGoBack = 'btn-go-back-test',
  dataTestIdBtnStep = 'btn-step-test',
}) => {
  const {t} = useTranslation();
  const {state, dispatch} = useOrderBulkUpdate();
  const {isValid, step} = state;
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (step < 0) {
      dispatch({type: ACTIONS.SET_STEP, payload: {step: 0}});
    }
    if (step > 1) {
      dispatch({type: ACTIONS.SET_STEP, payload: {step: 1}});
    }
  }, [dispatch, step]);

  return (
    <StepsContainer data-testid={dataTestId}>
      <NavBar>
        <GoBackButton
          data-testid={dataTestIdBtnGoBack}
          onClick={() => handleGoBackButton({dispatch})}
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
        {step === 0 ? (
          <Help>
            <HelpQuestionIcon />
            <HelpStrong>{t('order-bulk-update.help.text-review')}</HelpStrong>
            {t('order-bulk-update.help.text-learn')}
            <HelpLink target="_blank" rel="noreferrer">
              <HelpPlayIcon />
              {t('order-bulk-update.help.text-link')}
            </HelpLink>
          </Help>
        ) : (
          <HeaderBannerEmpty />
        )}
        <OrderBulkUpdateSteps passed={step} />
        <StepSelected status={step} />
      </Grid>
      <BottomNav>
        <ButtonStep
          onClick={() => handleButtonStep({dispatch, step, setModal})}
          dataTestId={dataTestIdBtnStep}
          disabled={!isValid}
        />
      </BottomNav>
      <ModalConfirm
        open={modal}
        setOpen={setModal}
        handleBtnConfirm={() =>
          handleBtnConfirm({setModal, state, dispatch, ACTIONS})
        }
        textHead={t('order-bulk-update.title-modal')}
        textBtnConfirm={t('order-bulk-update.btn-modal-confirm')}
        textBtnCancel={t('order-bulk-update.btn-modal-cancel')}
      />
    </StepsContainer>
  );
};
