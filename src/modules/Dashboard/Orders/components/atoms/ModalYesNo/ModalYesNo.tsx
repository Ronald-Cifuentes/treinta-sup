import {FC} from 'react';
import {Button, Popup} from '@30sas/web-ui-kit-core';
import {
  BodyModal,
  HeadModal,
  LayoutModal,
  WrapperButtonNo,
} from './ModalYesNo.styled';
import {ModalYesNoTypes} from './types';

export const ModalYesNo: FC<ModalYesNoTypes> = ({
  setOpen,
  open,
  handleBtnYes,
}) => (
  <Popup padding="0px" onClose={() => setOpen && setOpen(false)} open={open}>
    <LayoutModal>
      <HeadModal>¿Estás seguro de realizar los cambios?</HeadModal>
      <BodyModal>
        <WrapperButtonNo>
          <Button
            borderColor="secondary"
            borderColorType="700"
            color="neutrals"
            colorType="100"
            hoverColor="secondary"
            hoverColorType="100"
            label="No"
            rounded="xl"
            size="medium"
            textColor="secondary"
            textColorType="700"
            textVariant="Mediumbold"
            variant="secondary"
            onClick={() => setOpen && setOpen(false)}
          />
        </WrapperButtonNo>
        <Button
          label="Sí"
          rounded="xl"
          size="medium"
          textColor="primary"
          textColorType="900"
          textVariant="Mediumbold"
          variant="primary"
          onClick={handleBtnYes}
        />
      </BodyModal>
    </LayoutModal>
  </Popup>
);
