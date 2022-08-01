import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {StatusIndicator, Typography} from '@30sas/web-ui-kit-core';

import {
  ProductImg,
  ProductNameText,
  ProductNameContainer,
} from './InventoryTable.styled';
import {ProductNameProps} from './types';

export const ProductName: FC<ProductNameProps> = ({
  product,
  dataTestIdName,
}) => {
  const {t} = useTranslation();

  const status = product.errors.length === 0 ? 'success' : 'error';

  return (
    <ProductNameContainer>
      <StatusIndicator status={status} number={product.errors.length} />
      <ProductImg
        src={
          product.thumbImgUrl
            ? product.thumbImgUrl
            : '/assets/defaults/img_placeholder.png'
        }
        alt={t('inventory.product-image')}
      />
      <ProductNameText>
        <Typography margin="0" variant="Small" dataTestId={dataTestIdName}>
          {product.name}
        </Typography>
        <Typography
          margin="0"
          padding="0"
          variant="XSmall"
          color="gray"
          colorType="700">
          {product.categoryName}
        </Typography>
      </ProductNameText>
    </ProductNameContainer>
  );
};
