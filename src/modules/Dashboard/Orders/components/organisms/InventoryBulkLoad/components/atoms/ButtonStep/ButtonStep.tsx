import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import ICON_CORRECT_ERROR from '../../../../../../../../../Assets/ICON_CORRECT_ERROR.svg';
import {ButtonContainer} from './ButtonStep.styled';
import {ButtonStepProps} from './types';

export const ButtonStep: FC<ButtonStepProps> = ({disabled, onClick}) => {
  const {t} = useTranslation();
  const {state, dispatch} = useUploadBulk();

  const handleGoBackButton = (): void => {
    dispatch({
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
  };

  const Content = (): React.ReactElement => {
    switch (state.buttonStep) {
      case 0:
        return <>{t('bulk-upload.continue-revision')}</>;
      case 1:
        return (
          <>
            <img src={ICON_CORRECT_ERROR} alt="" />
            {t('bulk-upload.upload-file-again')}
          </>
        );
      case 2:
        return <>{t('bulk-upload.load-images')}</>;
      case 3:
        return <>{t('bulk-upload.confirm')}</>;
      default:
        return <div />;
    }
  };

  return (
    <ButtonContainer
      disabled={disabled}
      onClick={state.buttonStep == 1 ? handleGoBackButton : onClick}>
      <Content />
    </ButtonContainer>
  );
};
