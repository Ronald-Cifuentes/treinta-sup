import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {GeneralAlert} from 'modules/Dashboard/Orders/components/atoms/GeneralAlert/GeneralAlert';
import {InventoryTable} from 'modules/Dashboard/Orders/components/molecules/InventoryTable';
import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {getColumnsStepThree} from '../../../../../molecules/InventoryTable/InventoryTable.data';
import {PrintProducts} from '../StepTwo/types';
import {getAlertContentInfo} from './InventoryTable.func';
import {StepThreeProps} from './types';

export const StepThree: FC<StepThreeProps> = () => {
  const {t} = useTranslation();
  const products: PrintProducts[] = [];
  const {state, dispatch} = useUploadBulk();
  const [showAlertInfo] = useState(true);

  state.products.forEach((item, ind) => {
    products.push({
      status: parseInt(`${state.error?.[ind]?.length || 0}`),
      product: {
        id: ind,
        name: `${item.productName}`,
        image: item.productThumbImgUrl,
        sku: `${item.productSKU}`,
      },
    });
  });

  products.sort((a, b) => b.status - a.status);

  const handleRemove = (index: number): void => {
    dispatch({
      type: ACTIONS.REMOVE_IMAGE,
      payload: {index},
    });
  };

  return (
    <>
      <div style={{marginBottom: '20px'}}>
        {showAlertInfo && (
          <GeneralAlert
            content={getAlertContentInfo(t)}
            dataTestIdCloseButton="bulkUpload_button_closeAlert"
            type="info"
            border="radius"
          />
        )}
      </div>
      <InventoryTable
        columns={getColumnsStepThree(t, handleRemove)}
        products={products}
      />
    </>
  );
};
