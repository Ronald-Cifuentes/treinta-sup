import {ChangeEvent, FC, useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import {SpecialLineTabs} from 'components/atoms/SpecialLineTabs';
import {useOrders} from 'hooks/useOrders';
import {format} from 'date-fns';
import {Backdrop, Button, Popup} from '@30sas/web-ui-kit-core';
import {GridSelectionModel} from '@mui/x-data-grid';
import {optionsTabs, PointerStates} from './Orders.mock';
import {FiltersAndReport} from './components/molecules/FiltersAndReport';
import {
  CalendarFromTo,
  ReturnDate,
} from './components/molecules/FiltersAndReport/types';
import {ChangeStates} from './components/atoms/ChangeStates';
import {
  BodyModal,
  HeadModal,
  LayoutModal,
  WrapperButtonNo,
} from './Orders.styled';
import {columns} from './Orders.mock';

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

const dropDownDefaultValue = 25;
const tabDefaultValue = 0;

export const Orders: FC = () => {
  const {t} = useTranslation();
  const [date, setDate] = useState<CalendarFromTo>();
  const [tab, setTab] = useState<number>(tabDefaultValue);
  const [itemsByPage, setItemsByPage] = useState(dropDownDefaultValue);
  const [page, setPage] = useState(1);
  const [openModalChangeStates, setOpenModalChangeStates] = useState(false);
  const [countCheckboxesSelected, setCountCheckboxesSelected] = useState(0);
  const [openModalYesNo, setOpenModalYesNo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stateSelected, setStateSelected] = useState('');
  const {mutateSetState} = useOrders({});
  const [itemsSelected, setItemsSelected] = useState<GridSelectionModel>([]);

  const {dataRetrieve, refetchRetrieve} = useOrders({
    page,
    size: itemsByPage,
    statusId: tab,
    dateFrom: date?.from,
    dateTo: date?.to,
  });

  useEffect(() => {
    refetchRetrieve();
  }, [date, tab, itemsByPage, page]);

  const handleOnChangeDate = (value: ReturnDate | string): void => {
    const from = typeof value == 'string' ? value : value?.dateOne;
    const to = typeof value == 'string' ? value : value?.dateTwo;

    setDate({
      from: format(new Date(from), 'yyyy-MM-dd'),
      to: format(new Date(to), 'yyyy-MM-dd'),
    });
  };

  const handleOnChangeLineTabs = (
    value: React.SetStateAction<number>,
  ): void => {
    setTab(value);
  };

  const handleSpecialPagination = (
    _event: ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPage(value);
  };

  const handleChangeStates = (e): void => {
    setStateSelected(e.target.value);
    setOpenModalYesNo(true);
  };

  const handleBtnYes = async (): Promise<void> => {
    await setLoading(true);
    await mutateSetState({
      items: Array.from(itemsSelected),
      statusId: PointerStates[stateSelected],
    });
    await setOpenModalChangeStates(false);
    await setOpenModalYesNo(false);
    await setLoading(false);
    window.location.reload();
  };

  const handleGrid = (selectionModel: GridSelectionModel): void => {
    if (selectionModel.length > 0) {
      setCountCheckboxesSelected(selectionModel.length);
      setItemsSelected(selectionModel);
      setOpenModalChangeStates(true);
    } else {
      setOpenModalChangeStates(false);
    }
  };

  const rows = dataRetrieve?.items?.map(item => ({
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
    <DashboardLayout
      title={t('orders.title')}
      fancyLineProps={LINE_PROPS}
      sizeFancyLine="0.5px">
      <FiltersAndReport onChange={handleOnChangeDate} />
      <SpecialLineTabs
        optionsTabs={optionsTabs}
        onChange={handleOnChangeLineTabs}
      />
      <SpecialTableWithPagination
        formattedData={rows}
        dropDownDefaultValue={dropDownDefaultValue}
        setItemsByPage={setItemsByPage}
        handleSpecialPagination={handleSpecialPagination}
        itemsByPage={itemsByPage}
        totalItems={dataRetrieve?.pagination?.itemsNumber}
        handleGrid={handleGrid}
        columns={columns}
        checkboxSelection={true}
      />
      <ChangeStates
        open={openModalChangeStates}
        setOpen={setOpenModalChangeStates}
        count={countCheckboxesSelected}
        handleChangeStates={handleChangeStates}
      />
      <Popup
        padding="0px"
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
    </DashboardLayout>
  );
};
