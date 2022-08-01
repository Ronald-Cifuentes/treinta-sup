import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TableVirtualized} from '@30sas/web-ui-kit-core';

import {useCurrencyFormatter} from 'hooks';
import {RightBarScreensInventory} from 'config/constants';
import {useUploadBulk, ACTIONS} from 'context/UploadBulkContext';
import {ProductWithErrors} from 'context/UploadBulkContext/types';
import {useDashboard} from 'context/DashboardContext/DashboardContext';
import {ParamsTypes} from 'context/DashboardContext';

import {Alert} from './Alert';
import {getAlertContent, getColumns} from './InventoryTable.data';
import {MainContainer, TableContainer} from './InventoryTable.styled';

export const InventoryTable: FC<{products: ProductWithErrors[]}> = ({
  products,
}) => {
  const [showAlert, setShowAlert] = useState(true);
  const {rightBarNavigation} = useDashboard();
  const {navigate} = rightBarNavigation;
  const handleCloseAlert = (): void => setShowAlert(false);
  const {dispatch} = useUploadBulk();
  const {t} = useTranslation();
  const {formatter} = useCurrencyFormatter();

  const handleClick = (product: ProductWithErrors): void => {
    navigate(RightBarScreensInventory.EDIT_BULK_UPLOAD_PRODUCT, {
      product,
    } as ParamsTypes);
  };

  const handleRemove = (index: number): void => {
    dispatch({
      type: ACTIONS.REMOVE_PRODUCT,
      payload: {index},
    });
  };

  return (
    <MainContainer>
      {showAlert && (
        <Alert
          content={getAlertContent(t)}
          onClose={handleCloseAlert}
          dataTestIdCloseButton="bulkUpload_button_closeAlert"
        />
      )}
      <TableContainer>
        <TableVirtualized
          columns={getColumns(t, handleRemove, formatter)}
          data={products}
          onRowClick={handleClick}
        />
      </TableContainer>
    </MainContainer>
  );
};
