import {Backdrop, SearchInput} from '@30sas/web-ui-kit-core';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {GridSelectionModel} from '@mui/x-data-grid';
import {SpecialLineTabs} from 'components/atoms/SpecialLineTabs';
import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import {DashboardLayout} from 'components/templates';
import {format, utcToZonedTime} from 'date-fns-tz';
import addDays from 'date-fns/addDays';
import {useOrders} from 'hooks/useOrders';
import {EventProvider} from 'providers/event-provider';
import {ChangeEvent, FC, SetStateAction, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {getUser} from 'utils/infoUser';
import {ChangeStates} from '../../atoms/ChangeStates';
import {ModalYesNo} from '../../atoms/ModalYesNo';
import {TableMui} from '../../atoms/TableMui';
import {EmptyStateSearch} from '../../molecules/EmptyStateSearch';
import {FiltersAndReport} from '../../molecules/FiltersAndReport';
import {
  CalendarFromTo,
  ReturnDate,
} from '../../molecules/FiltersAndReport/types';
import {columns, optionsTabs} from './OrderList.config';
import {PointerStates} from './OrderList.const';
import {WrapperSearchBar} from './OrderList.styled';

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
  const [itemsByPage, setItemsByPage] = useState<number>(dropDownDefaultValue);
  const [page, setPage] = useState<number>(1);
  const [openModalChangeStates, setOpenModalChangeStates] =
    useState<boolean>(false);
  const [countCheckboxesSelected, setCountCheckboxesSelected] =
    useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [stateSelected, setStateSelected] = useState<string>('');
  const {mutateSetState} = useOrders({});
  const [itemsSelected, setItemsSelected] = useState<GridSelectionModel>([]);
  const [searchData, setSearchData] = useState<string>('');
  const [searchBar, setSearchBar] = useState<string>('');

  const {dataRetrieve, refetchRetrieve} = useOrders(
    searchData
      ? {page, size: itemsByPage, keyword: searchData}
      : {
          page,
          size: itemsByPage,
          statusId: tab,
          dateFrom: date?.from,
          dateTo: date?.to,
        },
  );

  useEffect(() => {
    refetchRetrieve().then(() => {
      setLoading(false);
    });
  }, [date, tab, itemsByPage, page, refetchRetrieve, searchData]);

  const handleOnChangeDate = (value: ReturnDate | string): void => {
    const from = typeof value == 'string' ? value : value?.dateOne;
    const to = typeof value == 'string' ? value : value?.dateTwo;

    setDate({
      from: format(
        utcToZonedTime(addDays(new Date(from), 1), 'America/Bogota'),
        'yyyy-MM-dd',
      ),
      to: format(
        utcToZonedTime(addDays(new Date(to), 1), 'America/Bogota'),
        'yyyy-MM-dd',
      ),
    });
  };

  const handleOnChangeLineTabs = (value: SetStateAction<number>): void => {
    setTab(value);
    setLoading(true);
    setOpenModalChangeStates(false);
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

  const handleBtnYes = (): void => {
    setLoading(true);
    EventProvider.getInstance().logEventAmplitude(
      'b2bs_orders_order_status_changed',
      {
        supplier: getUser()?.supplier,
        option_order_status_selected: stateSelected,
      },
    );
    mutateSetState({
      items: Array.from(itemsSelected),
      statusId: PointerStates[stateSelected],
    }).then(() => {
      setOpenModalChangeStates(false);
      setOpen(false);
      refetchRetrieve().then(() => {
        setLoading(false);
      });
    });
  };

  const handleGrid = (selectionModel: GridSelectionModel): void => {
    if (selectionModel.length > 0 && tab > 0) {
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
    deliveryDate: format(
      utcToZonedTime(addDays(new Date(item.deliveryDate), 1), 'America/Bogota'),
      'yyyy-MM-dd',
    ),
    createdAt: format(new Date(item.createdAt), 'MM/dd/yyyy h:mm a'),
    updatedAt: format(new Date(item.updatedAt), 'MM/dd/yyyy h:mm a'),
    customerName: item.customerName,
    phone: item.phone,
    detail: item.id,
  }));

  const searchOnBlur = (e: {target: {value: SetStateAction<string>}}): void => {
    setSearchData(e.target.value);
  };

  const searchOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchBar(e.target.value);
  };

  return (
    <DashboardLayout
      title={t('orders.title')}
      fancyLineProps={LINE_PROPS}
      sizeFancyLine="0.5px">
      <WrapperSearchBar>
        <SearchInput
          fullWidth
          placeholder={`${t('orders.input-search-placeholder')}`}
          backgroundColor="white"
          onBlur={searchOnBlur}
          onClear={() => {
            setSearchBar('');
            setSearchData('');
          }}
          onChange={searchOnChange}
          value={searchBar}
          showClearButton
        />
      </WrapperSearchBar>
      <FiltersAndReport onChange={handleOnChangeDate} disabled={!searchData} />
      <SpecialLineTabs
        optionsTabs={
          searchData
            ? [{key: 'ALL', label: 'Resultados de busqueda', value: '0'}]
            : optionsTabs
        }
        onChange={handleOnChangeLineTabs}
      />
      {searchData ? (
        rows?.length == 0 ? (
          <EmptyStateSearch />
        ) : (
          <TableMui
            formattedData={rows}
            pageSize={itemsByPage}
            handleGrid={handleGrid}
            columns={columns}
            checkboxSelection={true}
          />
        )
      ) : (
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
      )}
      <ChangeStates
        currentStatus={tab}
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
