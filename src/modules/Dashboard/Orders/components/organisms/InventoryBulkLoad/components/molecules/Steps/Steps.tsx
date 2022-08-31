/* eslint-disable max-lines */
import {Grid} from '@30sas/web-ui-kit-core';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  BottomNav,
  ButtonStyled,
  GoBackButton,
  NavBar,
} from '../../../InventoryBulkLoad.styled';
import {InventorySteps} from '../../atoms/InventorySteps';
import {StepSelected} from '../StepSelected';
import {StepsProps} from './types';

export const Steps: FC<StepsProps> = () => {
  const {t} = useTranslation();
  const {state, dispatch} = useUploadBulk();
  const {isValid, productsRepeated} = state;
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < 0) {
      setStep(0);
    }
    if (step > 2) {
      setStep(2);
    }
  }, [step]);

  const handleGoBackButton = (): void => {
    setStep(0);
    dispatch({
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
  };

  const handleContinue = (): void => {
    setStep(step + 1);
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
        <ButtonStyled
          upper={false}
          rounded="xl"
          size="medium"
          label={t('bulk-upload.continue-revision')}
          variant="primary"
          textVariant="Mediumbold"
          margin="32px"
          disabled={!isValid}
          dataTestId="bulkUpload_button_continueRevision"
          onClick={handleContinue}
        />
      </BottomNav>
    </>
  );
};
