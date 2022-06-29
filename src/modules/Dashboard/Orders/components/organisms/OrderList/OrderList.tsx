import {Backdrop} from '@30sas/web-ui-kit-core';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {GridSelectionModel} from '@mui/x-data-grid';
import {SpecialLineTabs} from 'components/atoms/SpecialLineTabs';
import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import {DashboardLayout} from 'components/templates';
import {format, utcToZonedTime} from 'date-fns-tz';
import {useOrders} from 'hooks/useOrders';
import {ChangeEvent, FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ChangeStates} from '../../atoms/ChangeStates';
import {ModalYesNo} from '../../atoms/ModalYesNo';
import {FiltersAndReport} from '../../molecules/FiltersAndReport';
import {
  CalendarFromTo,
  ReturnDate,
} from '../../molecules/FiltersAndReport/types';
import {PointerStates} from './OrderList.const';
import {columns, optionsTabs} from './OrderList.config';

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
  const [open, setOpen] = useState(false);
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
  }, [date, tab, itemsByPage, page, refetchRetrieve]);

  const handleOnChangeDate = (value: ReturnDate | string): void => {
    const from = typeof value == 'string' ? value : value?.dateOne;
    const to = typeof value == 'string' ? value : value?.dateTwo;

    setDate({
      from: format(
        utcToZonedTime(new Date(from), 'Europe/Berlin'),
        'yyyy-MM-dd',
      ),
      to: format(utcToZonedTime(new Date(to), 'Europe/Berlin'), 'yyyy-MM-dd'),
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
    setOpen(true);
  };

  const handleBtnYes = async (): Promise<void> => {
    setLoading(true);
    await mutateSetState({
      items: Array.from(itemsSelected),
      statusId: PointerStates[stateSelected],
    });
    setOpenModalChangeStates(false);
    setOpen(false);
    setLoading(false);
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
      <ModalYesNo {...{setOpen, open, handleBtnYes}} />
      <Backdrop open={loading} />
    </DashboardLayout>
  );
};
