import {Popup} from '@30sas/web-ui-kit-core';
import {useUploadBulk} from 'context/UploadBulkContext';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ButtonInfo} from '../../../../../../components/atoms/Buttons/Buttons.styled';
import {
  ArrowItem,
  BodyModal,
  BodyScroll,
  ErrorIcon,
  HeadModal,
  HightLight,
  LayoutModal,
  LiError,
  TitleErrorList,
  UlError,
  WrapperButtonCancel,
} from './ModalErrorFields.styled';
import {ModalErrorFieldsTypes} from './types';

export const ModalErrorFields: FC<ModalErrorFieldsTypes> = ({
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
            {t('bulk-upload.modal-error-fields.title')}
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
                        {t('bulk-upload.modal-error-fields.item-name-1')}
                      </HightLight>{' '}
                      {item.key.split('.')[1]}
                    </li>
                    <li key={`li-${keyInd}-column`}>
                      <HightLight>
                        {t('bulk-upload.modal-error-fields.item-name-2')}
                      </HightLight>{' '}
                      {item.key.split('.')[2]}
                    </li>
                    <li key={`li-${keyInd}-motive`}>
                      <HightLight>
                        {t('bulk-upload.modal-error-fields.item-name-3')}
                      </HightLight>{' '}
                      <UlError>
                        {item.reason.map(item2 => (
                          <LiError key={item2}>
                            <ArrowItem />
                            {item2}
                          </LiError>
                        ))}
                      </UlError>
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
