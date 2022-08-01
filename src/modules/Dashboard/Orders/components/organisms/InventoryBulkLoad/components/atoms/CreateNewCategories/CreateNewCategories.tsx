import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@30sas/web-ui-kit-core';

import {GenericModal} from '../GenericModal';
import {Alert} from './CreateNewCategories.styled';

import {CreateNewCategoriesProps} from './types';

export const CreateNewCategories: FC<CreateNewCategoriesProps> = props => {
  const {newCategories} = props;
  const {t} = useTranslation();
  return (
    <GenericModal
      {...props}
      PopupProps={{width: '448px'}}
      items={newCategories}
      dataTestId="bulkUpload_modal_categories"
      dataTestIdCloseButton="categoriesModal_button_close"
      dataTestIdContinueButton="categoriesModal_button_continue"
      dataTestIdBackButton="categoriesModal_button_back">
      <Typography
        variant="XLargebold"
        margin="8px 0"
        color="secondary"
        colorType="700"
        textAlign="center">
        {newCategories.join(', ')}.
      </Typography>
      <Alert>
        <Typography color="info" colorType="700" variant="Small">
          {t('bulk-upload.update-excel-message')}
        </Typography>
      </Alert>
    </GenericModal>
  );
};
