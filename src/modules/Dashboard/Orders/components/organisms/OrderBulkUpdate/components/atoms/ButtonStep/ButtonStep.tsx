import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import ICON_CORRECT_ERROR from '../../../../../../../../../Assets/ICON_CORRECT_ERROR.svg';
import {ButtonWarning} from '../../../../../../../../../components/atoms/Buttons/Buttons.styled';
import {ButtonStepProps} from './types';

export const ButtonStep: FC<ButtonStepProps> = ({
  disabled,
  onClick,
  dataTestId = 'order-bulk-update-button-step',
}) => {
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
        return <>{t('order-bulk-update.continue-revision')}</>;
      case 1:
        return (
          <>
            <img src={ICON_CORRECT_ERROR} alt="" />
            {t('order-bulk-update.upload-file-again')}
          </>
        );
      case 2:
        return <>{t('order-bulk-update.load-images')}</>;
      case 3:
        return <>{t('order-bulk-update.confirm')}</>;
      default:
        return <div />;
    }
  };

  return (
    <ButtonWarning
      data-testid={dataTestId}
      disabled={disabled}
      onClick={state.buttonStep == 1 ? handleGoBackButton : onClick}>
      <Content />
    </ButtonWarning>
  );
};
