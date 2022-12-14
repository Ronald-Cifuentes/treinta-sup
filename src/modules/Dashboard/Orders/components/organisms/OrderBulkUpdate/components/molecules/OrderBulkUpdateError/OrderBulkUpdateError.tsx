import {ACTIONS, useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {
  ButtonInfo,
  ButtonWarning,
} from '../../../../../../../../../components/atoms/Buttons/Buttons.styled';
import {setDataMassive} from '../../../OrderBulkUpdate.func';
import {
  IconError,
  OrderBulkUpdateErrorContainer,
  LayoutButtons,
  TextParagraphError,
  WrapButton,
} from './OrderBulkUpdateError.styled';
import {OrderBulkUpdateErrorProps} from './types';

export const OrderBulkUpdateError: FC<OrderBulkUpdateErrorProps> = ({
  dataTestId = 'order-bulk-update-error',
  dataTestIdBtnReload = 'btn-reload',
  dataTestIdBtnExit = 'btn-exit',
}) => {
  const {t} = useTranslation();
  const history = useNavigate();

  const {state, dispatch} = useOrderBulkUpdate();

  const handleBtnReload = (): void => {
    setDataMassive({state, dispatch, ACTIONS});
  };

  const handleBtnExit = (): void => {
    dispatch({
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
    history({pathname: '/ordenes'});
  };

  return (
    <OrderBulkUpdateErrorContainer data-testid={dataTestId}>
      <IconError />
      <TextParagraphError>
        {t('order-bulk-update.bulk-update-error')}
      </TextParagraphError>
      <LayoutButtons>
        <WrapButton>
          <ButtonWarning
            data-testid={dataTestIdBtnReload}
            onClick={handleBtnReload}>
            {t('order-bulk-update.btn-reload')}
          </ButtonWarning>
        </WrapButton>
        <WrapButton>
          <ButtonInfo data-testid={dataTestIdBtnExit} onClick={handleBtnExit}>
            {t('order-bulk-update.btn-exit')}
          </ButtonInfo>
        </WrapButton>
      </LayoutButtons>
    </OrderBulkUpdateErrorContainer>
  );
};
