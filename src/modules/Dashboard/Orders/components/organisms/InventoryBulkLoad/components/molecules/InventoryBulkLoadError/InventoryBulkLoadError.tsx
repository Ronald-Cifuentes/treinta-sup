import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {useParseXlsx} from 'hooks/useParseXlsx';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {
  ButtonInfo,
  ButtonWarning,
} from '../../../../../../../../../components/atoms/Buttons/Buttons.styled';
import {
  IconError,
  InventoryBulkLoadErrorContainer,
  LayoutButtons,
  TextParagraphError,
  WrapButton,
} from './InventoryBulkLoadError.styled';
import {InventoryBulkLoadErrorProps} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const InventoryBulkLoadError: FC<InventoryBulkLoadErrorProps> = ({
  dataTestId = 'inventory-bulkload-error',
  dataTestIdBtnReload = 'btn-reload',
  dataTestIdBtnExit = 'btn-exit',
}) => {
  const {t} = useTranslation();
  const history = useNavigate();
  const {massiveSave} = useParseXlsx();
  const {dispatch} = useUploadBulk();

  const handleBtnReload = (): void => {
    massiveSave();
  };

  const handleBtnExit = (): void => {
    dispatch({
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
    history({pathname: '/inventario'});
  };

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <InventoryBulkLoadErrorContainer data-testid={dataTestId}>
        <IconError />
        <TextParagraphError>
          {t('bulk-upload.inventory-bulk-load-error')}
        </TextParagraphError>
        <LayoutButtons>
          <WrapButton>
            <ButtonWarning
              data-testid={dataTestIdBtnReload}
              onClick={handleBtnReload}>
              {t('bulk-upload.btn-reload')}
            </ButtonWarning>
          </WrapButton>
          <WrapButton>
            <ButtonInfo data-testid={dataTestIdBtnExit} onClick={handleBtnExit}>
              {t('bulk-upload.btn-exit')}
            </ButtonInfo>
          </WrapButton>
        </LayoutButtons>
      </InventoryBulkLoadErrorContainer>
    </DashboardLayout>
  );
};
