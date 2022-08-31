// import {TableVirtualized} from '@30sas/web-ui-kit-core';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';

import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
// import {GeneralAlert} from '../../atoms/GeneralAlert/';
import {getColumns} from './InventoryTable.data';
// import {getAlertContent} from './InventoryTable.func';
import {
  MainContainer,
  MainTable,
  TableContainer,
} from './InventoryTable.styled';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   root: {
//     marginTop: '33px',
//     '& .MuiTab-root': {
//       fontFamily: "'Nunito Sans', sans-serif",
//       textTransform: 'capitalize',
//       fontWeight: '400',
//       color: '#67737E',
//       minHeight: 0,
//     },
//   },
// });

export const InventoryTable: FC<{products: unknown[]}> = ({products}) => {
  // const [showAlert, setShowAlert] = useState(true);
  // const handleCloseAlert = (): void => setShowAlert(false);
  const {t} = useTranslation();
  const {dispatch} = useUploadBulk();
  // const classes = useStyles();

  const handleRemove = (index: number): void => {
    dispatch({
      type: ACTIONS.REMOVE_PRODUCT,
      payload: {index},
    });
  };

  return (
    <MainContainer>
      {/* {showAlert && (
        <GeneralAlert
          content={getAlertContent(t)}
          onClose={handleCloseAlert}
          dataTestIdCloseButton="bulkUpload_button_closeAlert"
          type="info"
        />
      )} */}
      <TableContainer>
        <MainTable columns={getColumns(t, handleRemove)} data={products} />
      </TableContainer>
    </MainContainer>
  );
};
