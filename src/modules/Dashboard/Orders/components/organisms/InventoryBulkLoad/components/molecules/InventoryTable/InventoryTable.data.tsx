import {ReactNode} from 'react';
import {TFunction} from 'react-i18next';
import {Column} from '@30sas/web-ui-kit-core';

import {ProductWithErrors} from 'context/UploadBulkContext';

import {ProductName} from './ProductName';
import {ProductDelete} from './ProductDelete';

export const getAlertContent = (t: TFunction): ReactNode => (
  <>
    {t('bulk-upload.select-product')}
    <li>
      <strong>{t('bulk-upload.add-image')}</strong>
    </li>
    <li>
      <strong>{t('bulk-upload.check-errors')}</strong>
    </li>
  </>
);

export const getColumns = (
  t: TFunction<'translation', undefined>,
  handleRemove: (index: number) => void,
  formatter: (value: number) => string,
): Column[] => [
  {
    dataKey: 'name',
    width: 200,
    label: t('inventory-table.product'),
    minWidth: 200,
    flexGrow: 1,
    customRender: (product: ProductWithErrors, index) => (
      <ProductName
        product={product}
        dataTestIdName={`inventoryTable_product${index}_name`}
      />
    ),
  },
  {
    dataKey: 'price',
    width: 100,
    label: t('inventory-table.price'),
    minWidth: 100,
    customRender: (product: ProductWithErrors) =>
      typeof product.price === 'number'
        ? formatter(Number(product.price))
        : '-',
    align: 'right',
  },
  {
    dataKey: 'cost',
    width: 100,
    label: t('inventory-table.cost'),
    minWidth: 100,
    customRender: (product: ProductWithErrors) =>
      typeof product.cost === 'number' ? formatter(Number(product.cost)) : '-',
    align: 'right',
  },
  {
    dataKey: 'stock',
    width: 100,
    label: t('inventory-table.available'),
    minWidth: 100,
    customRender: (product: ProductWithErrors) =>
      typeof product.stock === 'number' ? product.stock.toString() : '-',
  },
  {
    dataKey: 'actions',
    width: 100,
    label: t('inventory-table.actions'),
    minWidth: 100,
    customRender: (_, index) => (
      <ProductDelete
        deleteProduct={() => {
          handleRemove(index);
        }}
        dataTestId={`inventoryTable_product${index}_deleteAction`}
      />
    ),
    align: 'center',
  },
];
