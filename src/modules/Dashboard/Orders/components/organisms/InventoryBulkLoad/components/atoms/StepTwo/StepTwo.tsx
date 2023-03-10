import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {GeneralAlert} from 'modules/Dashboard/Orders/components/atoms/GeneralAlert/GeneralAlert';
import {ModalErrorFields} from 'modules/Dashboard/Orders/components/atoms/ModalErrorFields';
import {InventoryTable} from 'modules/Dashboard/Orders/components/molecules/InventoryTable';
import {FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {getColumnsStepTwo} from '../../../../../molecules/InventoryTable/InventoryTable.data';
import {
  getAlertContentError,
  getAlertContentSuccess,
} from './InventoryTable.func';
import {PrintProducts, StepTwoProps} from './types';

export const StepTwo: FC<StepTwoProps> = () => {
  const {t} = useTranslation();
  const products: PrintProducts[] = [];
  const {state, dispatch} = useUploadBulk();
  const [showAlertSucces, setShowAlertSucces] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [modal, setModal] = useState(false);

  state.products.forEach((item, ind) => {
    products.push({
      status: parseInt(`${state.error.details?.[ind]?.reason.length || 0}`),
      product: {
        id: ind,
        name: `${item.productName}`,
        image: item.productThumbImgUrl,
        category: `${item.productCategoryName}`,
      },
    });
  });

  products.sort((a, b) => b.status - a.status);

  const countProductsWithError = products.filter(
    item => item.status > 0,
  ).length;

  useEffect(() => {
    if (countProductsWithError > 0) {
      setShowAlertDanger(true);
      setShowAlertSucces(false);
      dispatch({type: ACTIONS.SET_BTN_STEP, payload: {buttonStep: 1}});
    } else {
      setShowAlertDanger(false);
      setShowAlertSucces(true);
      dispatch({type: ACTIONS.SET_BTN_STEP, payload: {buttonStep: 2}});
    }
  }, [countProductsWithError, dispatch]);

  const handleRemove = (index: number): void => {
    dispatch({
      type: ACTIONS.REMOVE_PRODUCT,
      payload: {index},
    });
  };

  return (
    <>
      <div style={{marginBottom: '20px'}}>
        {showAlertSucces && (
          <GeneralAlert
            content={getAlertContentSuccess(t)}
            dataTestIdCloseButton="bulkUpload_button_closeAlert"
            type="success"
            border="radius"
          />
        )}
      </div>
      <div style={{marginBottom: '20px'}}>
        {showAlertDanger && (
          <GeneralAlert
            content={getAlertContentError(t, countProductsWithError, setModal)}
            dataTestIdCloseButton="bulkUpload_button_closeAlert"
            type="danger"
            border="radius"
          />
        )}
      </div>

      <InventoryTable
        columns={getColumnsStepTwo(t, handleRemove)}
        products={products}
      />
      <ModalErrorFields open={modal} setOpen={setModal} />
    </>
  );
};
