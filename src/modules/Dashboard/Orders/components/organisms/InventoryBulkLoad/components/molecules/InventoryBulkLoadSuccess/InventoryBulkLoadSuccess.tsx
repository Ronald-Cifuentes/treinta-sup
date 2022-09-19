import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {ButtonWarning} from '../../atoms/Buttons/Buttons.styled';
import {
  ArrowBtn,
  IconCheck,
  InventoryBulkLoadSuccessContainer,
  TextParagraphSuccess,
} from './InventoryBulkLoadSuccess.styled';
import {InventoryBulkLoadESuccessProps} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const InventoryBulkLoadSuccess: FC<
  InventoryBulkLoadESuccessProps
> = () => {
  const {t} = useTranslation();
  const history = useNavigate();

  const handleBtnShowInventory = (): void => {
    history({pathname: '/inventario'});
  };

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <InventoryBulkLoadSuccessContainer>
        <IconCheck />
        <TextParagraphSuccess>
          {t('bulk-upload.inventory-bulk-load-success')}
        </TextParagraphSuccess>
        <ButtonWarning onClick={handleBtnShowInventory}>
          <ArrowBtn />
          {t('bulk-upload.btn-inventory')}
        </ButtonWarning>
      </InventoryBulkLoadSuccessContainer>
    </DashboardLayout>
  );
};
