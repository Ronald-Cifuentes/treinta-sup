import {ACTIONS, useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import ICON_CORRECT_ERROR from '../../../../../../../../../Assets/ICON_CORRECT_ERROR.svg';
import {ButtonWarning} from '../../../../../../../../../components/atoms/Buttons/Buttons.styled';
import {getDataMassiveVerification} from '../../../OrderBulkUpdate.func';
import {ButtonStepProps, ContentProps} from './types';

const Content: FC<ContentProps> = ({state}) => {
  const {t} = useTranslation();
  switch (state.buttonStep) {
    case 0:
      return <>{t('order-bulk-update.btn-continue-revision')}</>;
    case 1:
      return (
        <>
          <img src={ICON_CORRECT_ERROR} alt="" />
          {t('order-bulk-update.btn-upload-file-again')}
        </>
      );
    case 2:
      return <>{t('order-bulk-update.btn-confirm')}</>;
    default:
      return <div />;
  }
};

export const ButtonStep: FC<ButtonStepProps> = ({
  disabled,
  onClick,
  dataTestId = 'order-bulk-update-button-step',
}) => {
  const {state, dispatch} = useOrderBulkUpdate();
  const {formattedData} = state;

  const handleGoBackButton = (): void => {
    getDataMassiveVerification({formattedData, dispatch, ACTIONS});
    dispatch({
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
  };

  return (
    <ButtonWarning
      data-testid={dataTestId}
      disabled={disabled}
      onClick={state.buttonStep == 1 ? handleGoBackButton : onClick}>
      <Content state={state} />
    </ButtonWarning>
  );
};
