import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Button} from '@30sas/web-ui-kit-core';
import {BackIcon} from '@30sas/web-ui-kit-icons';

import {ROUTES} from 'routes/types';
import {useNavigateI18n} from 'hooks';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';

import {InventoryUploadTileProps} from './types';

export const Title: FC<InventoryUploadTileProps> = ({step, goToStep}) => {
  const navigate = useNavigateI18n();
  const {t} = useTranslation();
  const {state, dispatch} = useUploadBulk();

  const handleClick = (): void => {
    if (step === 0) {
      navigate(ROUTES.INVENTORY);
      dispatch({
        type: ACTIONS.CLEAN_STATE,
      });
    } else {
      goToStep(0);
      dispatch({
        type: ACTIONS.SET_DUPLICATE_SETTING,
        payload: {option: null},
      });
      if (!state?.productsRepeated) {
        dispatch({type: ACTIONS.SET_IS_VALID, payload: true});
      }
    }
  };

  return (
    <Button
      upper={false}
      hoverColor="gray"
      dataTestId="bulkUpload_button_backToInventory"
      hoverColorType="200"
      label={t('bulk-upload.upload-inventory-excel')}
      rounded="xl"
      size="large"
      textVariant="XLargebold"
      transparent
      onClick={handleClick}
      StartIcon={() => <BackIcon width={50} />}
    />
  );
};
