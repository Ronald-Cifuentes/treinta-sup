import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {ButtonWarning} from '../../../../../../../../../components/atoms/Buttons/Buttons.styled';
import {
  ArrowBtn,
  IconCheck,
  OrderBulkUpdateSuccessContainer,
  TextParagraphSuccess,
} from './OrderBulkUpdateSuccess.styled';
import {OrderBulkUpdateSuccessProps} from './types';

export const OrderBulkUpdateSuccess: FC<OrderBulkUpdateSuccessProps> = ({
  dataTestId = 'order-bulk-update-success',
  dataTestIdBtn = 'btn-back',
}) => {
  const {t} = useTranslation();
  const history = useNavigate();

  const handleBtnShowOrders = (): void => {
    history({pathname: '/ordenes'});
  };

  return (
    <OrderBulkUpdateSuccessContainer data-testid={dataTestId}>
      <IconCheck />
      <TextParagraphSuccess>
        {t('order-bulk-update.bulk-update-success')}
      </TextParagraphSuccess>
      <ButtonWarning data-testid={dataTestIdBtn} onClick={handleBtnShowOrders}>
        <ArrowBtn />
        {t('order-bulk-update.btn-orders')}
      </ButtonWarning>
    </OrderBulkUpdateSuccessContainer>
  );
};
