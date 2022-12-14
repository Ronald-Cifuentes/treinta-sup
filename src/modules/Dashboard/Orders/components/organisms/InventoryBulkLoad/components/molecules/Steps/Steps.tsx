/* eslint-disable max-lines */
import {Grid} from '@30sas/web-ui-kit-core';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {useParseXlsx} from 'hooks/useParseXlsx';
import {ModalConfirm} from 'modules/Dashboard/Orders/components/atoms/ModalConfirm';
import {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {EventProvider} from 'providers/event-provider';
import {getUser} from 'utils/infoUser';
import {
  BottomNav,
  GoBackButton,
  NavBar,
} from '../../../InventoryBulkLoad.styled';
import {ButtonStep} from '../../atoms/ButtonStep';
import {InventorySteps} from '../../atoms/InventorySteps';
import {StepSelected} from '../StepSelected';
import {StepsProps} from './types';

export const Steps: FC<StepsProps> = () => {
  const {t} = useTranslation();
  const {state, dispatch} = useUploadBulk();
  const {isValid, productsRepeated, step} = state;
  const {massiveSave} = useParseXlsx();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (step < 0) {
      dispatch({type: ACTIONS.SET_STEP, payload: {step: 0}});
    }
    if (step > 2) {
      dispatch({type: ACTIONS.SET_STEP, payload: {step: 2}});
    }
  }, [dispatch, step]);

  const handleGoBackButton = (): void => {
    dispatch({type: ACTIONS.SET_STEP, payload: {step: 0}});
    dispatch({
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
  };

  const logInventoryMassiveSaveConfirmed = (): void => {
    EventProvider.getInstance().logEventAmplitude(
      `b2bs_inventory_massive_save_confirmed`,
      {
        supplier: getUser()?.supplier,
      },
    );
  };

  const validateContainAllImages = (): boolean => {
    let valid = 0;
    for (const element of state.products) {
      if (element.productThumbImgUrl) {
        valid++;
      }
    }
    return valid == state.products.length;
  };

  const handleContinue = (): void => {
    if (state.step != 2) {
      dispatch({type: ACTIONS.SET_STEP, payload: {step: step + 1}});
    }
    switch (state.buttonStep) {
      case 0:
        EventProvider.getInstance().logEventAmplitude(
          `b2bs_inventory_upload_confirmed`,
          {
            supplier: getUser()?.supplier,
          },
        );
        break;
      case 2:
        dispatch({type: ACTIONS.SET_BTN_STEP, payload: {buttonStep: 3}});
        break;
      case 3:
        if (validateContainAllImages()) {
          massiveSave();
          logInventoryMassiveSaveConfirmed();
        } else {
          setModal(true);
        }
        break;
    }
  };

  const handleBtnConfirm = (): void => {
    setModal(false);
    massiveSave();
    logInventoryMassiveSaveConfirmed();
  };

  return (
    <>
      <NavBar>
        <GoBackButton onClick={handleGoBackButton} />
        {t('bulk-upload.button-go-back')}
      </NavBar>
      <Grid
        item
        xs={12}
        sm={10}
        md={8}
        justifyContent="center"
        alignItems="center"
        paddingTop={productsRepeated ? '100px' : '0px'}>
        <InventorySteps passed={step} />
        <StepSelected status={step} />
      </Grid>
      <BottomNav>
        <ButtonStep disabled={!isValid} onClick={handleContinue} />
      </BottomNav>
      <ModalConfirm
        open={modal}
        setOpen={setModal}
        handleBtnConfirm={handleBtnConfirm}
        textHead={t('bulk-upload.modal-confirm')}
        textBtnConfirm={t('bulk-upload.btn-yes-continue')}
        textBtnCancel={t('bulk-upload.btn-cancel')}
      />
    </>
  );
};
