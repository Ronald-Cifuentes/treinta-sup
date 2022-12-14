import {Popup} from '@30sas/web-ui-kit-core';
import {FC} from 'react';
import {
  ButtonInfo,
  ButtonSuccess,
} from '../../../../../../components/atoms/Buttons/Buttons.styled';
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
  textHead = 'Title',
  textBtnConfirm = 'Confirm',
  textBtnCancel = 'Cancel',
  dataTestId = 'modal-confirm',
  dataTestIdBtnSuccess = 'btn-success',
  dataTestIdBtnCancel = 'btn-cancel',
}) => {
  const handleBtnCancel = (): void => {
    setOpen && setOpen(false);
  };

  return (
    <Popup
      dataTestId={dataTestId}
      padding="0px"
      onClose={handleBtnCancel}
      open={open}>
      <LayoutModal>
        <HeadModal>
          <div>
            <WarningIcon />
          </div>
          <div>{textHead}</div>
        </HeadModal>
        <BodyModal>
          <ButtonSuccess
            data-testid={dataTestIdBtnSuccess}
            onClick={handleBtnConfirm}>
            {textBtnConfirm}
          </ButtonSuccess>
          <WrapperButtonCancel>
            <ButtonInfo
              data-testid={dataTestIdBtnCancel}
              onClick={handleBtnCancel}>
              {textBtnCancel}
            </ButtonInfo>
          </WrapperButtonCancel>
        </BodyModal>
      </LayoutModal>
    </Popup>
  );
};
