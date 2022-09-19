import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {useParseXlsx} from 'hooks/useParseXlsx';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {ButtonInfo, ButtonWarning} from '../../atoms/Buttons/Buttons.styled';
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

export const InventoryBulkLoadError: FC<InventoryBulkLoadErrorProps> = () => {
  const {t} = useTranslation();
  const history = useNavigate();
  const {massiveSave} = useParseXlsx();
  const {dispatch} = useUploadBulk();

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

  const handleBtnReload = (): void => {
    save();
  };

  const handleBtnExit = (): void => {
    dispatch({
      type: ACTIONS.UPLOAD_FILE_RESET,
    });
    history({pathname: '/inventario'});
  };

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <InventoryBulkLoadErrorContainer>
        <IconError />
        <TextParagraphError>
          {t('bulk-upload.inventory-bulk-load-error')}
        </TextParagraphError>
        <LayoutButtons>
          <WrapButton>
            <ButtonWarning onClick={handleBtnReload}>
              {t('bulk-upload.btn-reload')}
            </ButtonWarning>
          </WrapButton>
          <WrapButton>
            <ButtonInfo onClick={handleBtnExit}>
              {t('bulk-upload.btn-exit')}
            </ButtonInfo>
          </WrapButton>
        </LayoutButtons>
      </InventoryBulkLoadErrorContainer>
    </DashboardLayout>
  );
};
