import {FC} from 'react';
import {Button, Popup} from '@30sas/web-ui-kit-core';
import {
  Report,
  BodyModal,
  HeadModal,
  LayoutModal,
  WrapperActions,
} from './ModalGeneric.styled';
import {ModalGenericTypes} from './types';

const REPORT_DATASTUDIO = process.env.REACT_APP_REPORT_STUDIO;

export const ModalGeneric: FC<ModalGenericTypes> = ({
  openModal,
  closeModal,
  dataTestId = 'modal-generic',
  dataTestIdBtnSuccess = 'btn-success',
}) => (
  <Popup
    width="90%"
    padding="0px"
    hideCloseButton
    onClose={() => closeModal}
    open={openModal}
    dataTestId={dataTestId}>
    <LayoutModal>
      <HeadModal>Reporte de Google Data Studio</HeadModal>
      <BodyModal>
        <Report
          width="100%"
          height="600px"
          src={REPORT_DATASTUDIO}
          title="Reporte de Google Data Studio"
          frameBorder="0"
        />
        <WrapperActions>
          <Button
            dataTestId={dataTestIdBtnSuccess}
            borderColor="secondary"
            borderColorType="700"
            color="neutrals"
            colorType="100"
            hoverColor="secondary"
            hoverColorType="100"
            label="Aceptar"
            rounded="xl"
            size="medium"
            textColor="secondary"
            textColorType="700"
            textVariant="Mediumbold"
            variant="secondary"
            onClick={closeModal}
          />
        </WrapperActions>
      </BodyModal>
    </LayoutModal>
  </Popup>
);
