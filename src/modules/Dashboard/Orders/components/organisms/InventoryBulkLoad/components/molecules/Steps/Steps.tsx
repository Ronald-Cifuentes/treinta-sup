/* eslint-disable max-lines */
import {Grid} from '@30sas/web-ui-kit-core';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {useParseXlsx} from 'hooks/useParseXlsx';
import {ModalConfirm} from 'modules/Dashboard/Orders/components/atoms/ModalConfirm';
import {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
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
  const history = useNavigate();
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

  const validateContainAllImages = (): boolean => {
    let valid = 0;
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].productThumbImgUrl) {
        valid++;
      }
    }
    return valid == state.products.length;
  };

  const save = (): void => {
    massiveSave()
      .then(res => {
        if (res.status == 200) {
          dispatch({
            type: ACTIONS.UPLOAD_FILE_RESET,
          });
          history({pathname: '/inventario/bulkload/success'});
        }
      })
      .catch(() => {
        history({pathname: '/inventario/bulkload/error'});
      });
  };

  const handleContinue = (): void => {
    if (state.step != 2) {
      dispatch({type: ACTIONS.SET_STEP, payload: {step: step + 1}});
    }
    switch (state.buttonStep) {
      case 2:
        dispatch({type: ACTIONS.SET_BTN_STEP, payload: {buttonStep: 3}});
        break;
      case 3:
        if (validateContainAllImages()) {
          save();
        } else {
          setModal(true);
        }
        break;
    }
  };

  const handleBtnConfirm = (): void => {
    setModal(false);
    save();
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
      />
    </>
  );
};
