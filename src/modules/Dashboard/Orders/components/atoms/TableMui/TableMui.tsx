import {FC, useState} from 'react';
import {DataGrid, GridSelectionModel} from '@mui/x-data-grid';
import {format} from 'date-fns';
import {ChangeStates} from '../ChangeStates';
import {PropTypesTableMui} from './types';
import {columns, PointerStates} from './TableMui.mock';
import {
  BodyModal,
  HeadModal,
  LayoutModal,
  TableMuiRoot,
  WrapperButtonNo,
} from './TableMui.styled';
import {Backdrop, Button, Popup} from '@30sas/web-ui-kit-core';
import {States, useOrders} from 'hooks/useOrders';

const StylesTableMui = {
  border: 0,
  marginTop: '40px',
  webkitBoxShadow: '2px 4px 8px 0px rgba(34, 38, 42, 0.05)',
  mozBoxShadow: '2px 4px 8px 0px rgba(34, 38, 42, 0.05)',
  boxShadow: '2px 4px 8px 0px rgba(34, 38, 42, 0.05)',
  '& .MuiDataGrid-columnHeaders': {
    minHeight: '48px !important',
    maxHeight: '48px !important',
    lineHeight: '48px !important',
  },
  '& .MuiDataGrid-columnHeader': {
    backgroundColor: '#F4F5F6',
    color: '#67737E',
    border: '0',
    borderRadius: '6px 6px 0px 0px',
    padding: '14px',
    lineHeight: '20px',
  },
  '& .MuiDataGrid-cell': {
    fontSize: 16,
  },
  '& .MuiDataGrid-columnHeaderCheckbox': {
    padding: '14px 0px',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-menuIconButton': {
    display: 'none',
  },
  '& .MuiDataGrid-iconButtonContainer': {
    display: 'none',
  },
  '& .PrivateSwitchBase-root': {
    padding: 0,
  },
};

export const TableMui: FC<PropTypesTableMui> = ({
  formattedData,
  pageSize = 8,
}) => {
  const [openModalChangeStates, setOpenModalChangeStates] = useState(false);
  const [countCheckboxesSelected, setCountCheckboxesSelected] = useState(0);
  const [openModalYesNo, setOpenModalYesNo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itemsSelected, setItemsSelected] = useState<GridSelectionModel>([]);
  const [stateSelected, setStateSelected] = useState('');
  const {mutateSetState, refetchRetrieve} = useOrders({});

  const handleGrid = (selectionModel: GridSelectionModel): void => {
    if (selectionModel.length > 0) {
      setCountCheckboxesSelected(selectionModel.length);
      setItemsSelected(selectionModel);
      setOpenModalChangeStates(true);
    } else {
      setOpenModalChangeStates(false);
    }
  };

  const handleChangeStates = e => {
    setStateSelected(e.target.value);
    setOpenModalYesNo(true);
  };

  const handleBtnYes = async () => {
    await setLoading(true);
    await mutateSetState({
      items: Array.from(itemsSelected),
      statusId: PointerStates[stateSelected],
    });
    await setOpenModalChangeStates(false);
    await setOpenModalYesNo(false);
    await setLoading(false);
    // await refetchRetrieve();
    window.location.reload();
  };

  const rows = formattedData?.items?.map(item => ({
    id: item.id,
    value: item.value,
    status: item.status,
    deliveryDate: format(new Date(item.deliveryDate), 'MM/dd/yyyy'),
    createdAt: format(new Date(item.createdAt), 'MM/dd/yyyy'),
    updatedAt: format(new Date(item.updatedAt), 'MM/dd/yyyy'),
    customerName: item.customerName,
    phone: item.phone,
    detail: item.id,
  }));

  return (
    <TableMuiRoot data-testid="table-mui">
      <DataGrid
        rows={rows || []}
        columns={columns}
        pageSize={pageSize}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={handleGrid}
        sx={StylesTableMui}
        hideFooter={true}
        autoHeight={true}
      />
      <ChangeStates
        open={openModalChangeStates}
        setOpen={setOpenModalChangeStates}
        count={countCheckboxesSelected}
        handleChangeStates={handleChangeStates}
      />
      <Popup
        padding={'0px'}
        onClose={() => setOpenModalYesNo(false)}
        open={openModalYesNo}>
        <LayoutModal>
          <HeadModal>¿Estás seguro de realizar los cambios?</HeadModal>
          <BodyModal>
            <WrapperButtonNo>
              <Button
                borderColor="secondary"
                borderColorType="700"
                color="neutrals"
                colorType="100"
                hoverColor="secondary"
                hoverColorType="100"
                label="No"
                rounded="xl"
                size="medium"
                textColor="secondary"
                textColorType="700"
                textVariant="Mediumbold"
                variant="secondary"
                onClick={() => setOpenModalYesNo(false)}
              />
            </WrapperButtonNo>
            <Button
              label="Sí"
              rounded="xl"
              size="medium"
              textColor="primary"
              textColorType="900"
              textVariant="Mediumbold"
              variant="primary"
              onClick={handleBtnYes}
            />
          </BodyModal>
        </LayoutModal>
      </Popup>
      <Backdrop open={loading} />
    </TableMuiRoot>
  );
};
