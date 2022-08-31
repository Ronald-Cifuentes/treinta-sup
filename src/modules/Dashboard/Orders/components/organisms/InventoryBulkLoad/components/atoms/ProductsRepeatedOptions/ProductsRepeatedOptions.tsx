import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Typography} from '@30sas/web-ui-kit-core';
import {ReloadIcon, TagIcon} from '@30sas/web-ui-kit-icons';

import {useUploadBulk, ACTIONS} from 'context/UploadBulkContext';

import {Card, IconContainer} from './ProductsRepeatedOptions.styled';

import {Props} from './types';

export const ProductsRepeatedOptions: FC<Props> = ({productsRepeated}) => {
  const {state, dispatch} = useUploadBulk();
  const {t} = useTranslation();

  const handleClick = (option: string) => () => {
    dispatch({
      type: ACTIONS.SET_DUPLICATE_SETTING,
      payload: {option},
    });
  };

  return (
    <>
      <Typography variant="Mediumbold" textAlign="center">
        {t('bulk-upload.product-repeated-message', {productsRepeated})}
      </Typography>
      <Card
        onClick={handleClick('override')}
        active={state.duplicateStrategy === 'override'}
        data-testid="bulkUpload_button_override">
        <Box display="flex" alignItems="center">
          <IconContainer>
            <ReloadIcon width="30px" height="30px" fill="#67737E" />
          </IconContainer>
        </Box>
        <Box>
          <Typography variant="Smallbold" margin="14px 0 0 14px">
            {t('bulk-upload.replace-all')}
          </Typography>
          <Typography
            variant="Small"
            color="gray"
            colorType="700"
            margin="0 14px">
            {t('bulk-upload.replace-message')}
          </Typography>
        </Box>
      </Card>
      <Card
        onClick={handleClick('add-stock')}
        active={state.duplicateStrategy === 'add-stock'}
        data-testid="bulkUpload_button_addStock">
        <Box display="flex" alignItems="center">
          <IconContainer>
            <TagIcon width="30px" height="30px" fill="#67737E" />
          </IconContainer>
        </Box>
        <Box>
          <Typography variant="Smallbold" margin="14px 0 0 14px">
            {t('bulk-upload.add-quantity-stock')}
          </Typography>
          <Typography
            variant="Small"
            color="gray"
            colorType="700"
            margin="0 14px">
            {t('bulk-upload.keep-message')}
          </Typography>
        </Box>
      </Card>
    </>
  );
};
