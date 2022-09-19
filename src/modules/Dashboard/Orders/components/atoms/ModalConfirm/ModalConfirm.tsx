import {Popup} from '@30sas/web-ui-kit-core';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ButtonInfo,
  ButtonSuccess,
} from '../../organisms/InventoryBulkLoad/components/atoms/Buttons/Buttons.styled';
import {
  BodyModal,
  HeadModal,
  LayoutModal,
  WarningIcon,
  WrapperButtonCancel,
} from './ModalConfirm.styled';
import {ModalConfirmTypes} from './types';

export const ModalConfirm: FC<ModalConfirmTypes> = ({
  setOpen,
  open,
  handleBtnConfirm,
}) => {
  const {t} = useTranslation();
  const handleBtnCancel = (): void => {
    setOpen && setOpen(false);
  };

  return (
    <Popup padding="0px" onClose={() => setOpen && setOpen(false)} open={open}>
      <LayoutModal>
        <HeadModal>
          <div>
            <WarningIcon />
          </div>
          <div>{t('bulk-upload.modal-confirm')}</div>
        </HeadModal>
        <BodyModal>
          <ButtonSuccess onClick={handleBtnConfirm}>
            {t('bulk-upload.btn-yes-continue')}
          </ButtonSuccess>
          <WrapperButtonCancel>
            <ButtonInfo onClick={handleBtnCancel}>
              {t('bulk-upload.btn-cancel')}
            </ButtonInfo>
          </WrapperButtonCancel>
        </BodyModal>
      </LayoutModal>
    </Popup>
  );
};
