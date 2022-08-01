import {FC} from 'react';
import {DeleteIcon} from '@30sas/web-ui-kit-icons';
import {ActionButton} from '@30sas/web-ui-kit-core';

import {ProductDeleteProps} from './types';

export const ProductDelete: FC<ProductDeleteProps> = ({
  deleteProduct,
  dataTestId,
}) => (
  <ActionButton
    icon={DeleteIcon}
    colorBg="danger"
    colorBgType="100"
    colorIcon="danger"
    colorIconType="500"
    toolTipText="Eliminar"
    onClick={event => {
      event.stopPropagation();
      deleteProduct();
    }}
    height={8}
    widthIcon={4}
    heightIcon={4}
    dataTestId={dataTestId}
  />
);
