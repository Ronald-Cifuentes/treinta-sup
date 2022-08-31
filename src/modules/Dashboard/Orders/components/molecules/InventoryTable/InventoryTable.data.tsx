import {Column} from '@30sas/web-ui-kit-core';
import {TFunction} from 'react-i18next';
import {ImageProduct} from '../../atoms/ImageProduct';
import {LayoutProduct} from '../../atoms/LayoutProduct';
import {ProductDelete} from './ProductDelete';

export const getColumns = (
  t: TFunction<'translation', undefined>,
  handleRemove: (index: number) => void,
): Column[] => [
  {
    dataKey: 'status',
    width: 60,
    label: '',
    align: 'right',
    customRender: ({status}) => <ImageProduct count={status} />,
  },
  {
    dataKey: 'product',
    width: 200,
    label: t('inventory-table.product'),
    minWidth: 200,
    flexGrow: 1,
    customRender: ({product, status}) => (
      <LayoutProduct product={product} status={status} />
    ),
  },
  {
    dataKey: 'actions',
    width: 100,
    label: t('inventory-table.actions'),
    minWidth: 100,
    customRender: ({product: {id}}) => (
      <ProductDelete
        deleteProduct={() => {
          handleRemove(id);
        }}
        dataTestId={`inventoryTable_product${id}_deleteAction`}
      />
    ),
    align: 'center',
  },
];
