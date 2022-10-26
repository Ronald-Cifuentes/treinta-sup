import {Column} from '@30sas/web-ui-kit-core';
import {TFunction} from 'i18next';
import {ImageProduct} from '../../atoms/ImageProduct';
import {LayoutProduct} from '../../atoms/LayoutProduct';
import {ProductLoad} from '../../atoms/ProductLoad/ProductLoad';
import {ProductDelete} from './ProductDelete';

export const getColumnsStepTwo = (
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
    minWidth: 120,
    customRender: ({product}) => (
      <ProductDelete
        deleteProduct={() => {
          handleRemove(product.id);
        }}
        dataTestId={`inventoryTable_product${product.id}_deleteAction`}
      />
    ),
    align: 'center',
  },
];

export const getColumnsStepThree = (
  t: TFunction<'translation', undefined>,
  handleRemove: (index: number) => void,
): Column[] => [
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
    width: 150,
    label: t('inventory-table.actions'),
    minWidth: 150,
    customRender: ({product: {id, image}}) =>
      image ? (
        <ProductDelete
          deleteProduct={() => {
            handleRemove(id);
          }}
          dataTestId={`inventoryTable_product${id}_deleteAction`}
        />
      ) : (
        <ProductLoad id={id} image={image} />
      ),
    align: 'center',
  },
];
