import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {
  ButtonInfo,
  ButtonWarning,
} from '../../../../../../../../../components/atoms/Buttons/Buttons.styled';
import {
  IconError,
  OrderBulkUpdateErrorContainer,
  LayoutButtons,
  TextParagraphError,
  WrapButton,
} from './OrderBulkUpdateError.styled';
import {OrderBulkUpdateErrorProps} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const OrderBulkUpdateError: FC<OrderBulkUpdateErrorProps> = ({
  dataTestId = 'order-bulk-update-error',
  dataTestIdBtnReload = 'btn-reload',
  dataTestIdBtnExit = 'btn-exit',
}) => {
  const {t} = useTranslation();
  const history = useNavigate();

  // TODO: AQUI FALTA IMPORTAR LOS HOOKS NECESARIOS DE LOS QUE SALEN MASSIVESAVE Y DISPATCH
  // const {massiveSave} = useParseXlsx();
  // const {dispatch} = useUploadBulk();

  const handleBtnReload = (): void => {
    // TODO: AQUI FALTA AGREGAR EL MASSIVE SAVE PARA PODER RELANZAR EL GUARDADO
    // massiveSave();
  };

  const handleBtnExit = (): void => {
    // TODO: AQUI FALTA ESTABLECER UN DISPATCH PARA RESETEAR LOS FORMULARIOS DE LA PAGINA ANTERIOR
    // dispatch({
    //   type: ACTIONS.UPLOAD_FILE_RESET,
    // });
    history({pathname: '/ordenes'});
  };

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
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
    </DashboardLayout>
  );
};
