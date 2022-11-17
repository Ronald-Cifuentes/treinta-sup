import {Popup} from '@30sas/web-ui-kit-core';
import {useUploadBulk} from 'context/UploadBulkContext';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ButtonInfo} from '../../../../../../components/atoms/Buttons/Buttons.styled';
import {
  BodyModal,
  BodyScroll,
  ErrorIcon,
  HeadModal,
  HightLight,
  LayoutModal,
  TitleErrorList,
  UlError,
  WrapperButtonCancel,
} from './ModalErrorWarehouse.styled';
import {ModalErrorWarehouseTypes} from './types';

export const ModalErrorWarehouse: FC<ModalErrorWarehouseTypes> = ({
  setOpen,
  open,
}) => {
  const {t} = useTranslation();
  const {state} = useUploadBulk();

  const handleBtnCancel = (): void => {
    setOpen && setOpen(false);
  };

  return (
    <Popup padding="0px" onClose={() => setOpen && setOpen(false)} open={open}>
      <LayoutModal>
        <HeadModal>
          <div>
            <ErrorIcon />
          </div>
          <TitleErrorList>
            {t('bulk-upload.modal-error-warehouse.title')}
          </TitleErrorList>
          <BodyScroll>
            {state.error.details?.map((item, ind) => {
              const keyInd = `${ind}-${item.key}`;
              return (
                <div key={`div-${keyInd}`}>
                  <br />
                  <UlError key={`ul-${keyInd}`}>
                    <li key={`li-${keyInd}-row`}>
                      <HightLight>
                        {t('bulk-upload.modal-error-warehouse.item-name-1')}
                      </HightLight>{' '}
                      {item.key.split('.')[1]}
                    </li>
                  </UlError>
                </div>
              );
            })}
          </BodyScroll>
        </HeadModal>
        <BodyModal>
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
