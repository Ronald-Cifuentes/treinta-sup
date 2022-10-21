import {subMonths} from 'date-fns';
import addDays from 'date-fns/addDays';
import {useTranslation} from 'react-i18next';
import {format, utcToZonedTime} from 'date-fns-tz';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {GridSelectionModel} from '@mui/x-data-grid';
import {Backdrop, SearchInput} from '@30sas/web-ui-kit-core';
import {ChangeEvent, FC, SetStateAction, useEffect, useState} from 'react';

import {DashboardLayout} from 'components/templates';
import {SpecialLineTabs} from 'components/atoms/SpecialLineTabs';
import {ModalGeneric} from 'modules/Dashboard/Orders/components/atoms/ModalGeneric';
import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';

import {OrderStatus, useOrders} from 'hooks/useOrders';

import {ModalYesNo} from '../../atoms/ModalYesNo';
import {ChangeStates} from '../../atoms/ChangeStates';

import {
  CalendarFromTo,
  ReturnDate,
} from '../../molecules/FiltersAndReport/types';
import {EmptyStateSearch} from '../../molecules/EmptyStateSearch';
import {FiltersAndReport} from '../../molecules/FiltersAndReport';

import {PointerStates} from './OrderList.const';
import {WrapperSearchBar} from './OrderList.styled';
import {columns, optionsTabs} from './OrderList.config';

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

const dropDownDefaultValue = 25;
const dropDownDefaultValueSearch = 100;
const tabDefaultValue = 0;

export const OrderList: FC = () => {
  const {t} = useTranslation();
  const initSearchData: string = localStorage.getItem('searchData') || '';
  const [searchData, setSearchData] = useState<string>(initSearchData || '');
  const [searchBar, setSearchBar] = useState<string>(initSearchData || '');
  const [tab, setTab] = useState<number>(tabDefaultValue);
  const [tabSearch, setTabSearch] = useState<number>(tabDefaultValue);
  const [page, setPage] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [stateSelected, setStateSelected] = useState<string>('');
  const [itemsSelected, setItemsSelected] = useState<GridSelectionModel>([]);
  const [itemsByPage, setItemsByPage] = useState<number>(
    searchData ? dropDownDefaultValueSearch : dropDownDefaultValue,
  );
  const [openModalChangeStates, setOpenModalChangeStates] =
    useState<boolean>(false);
  const [countCheckboxesSelected, setCountCheckboxesSelected] =
    useState<number>(0);
  const [date, setDate] = useState<CalendarFromTo>({
    from: format(
      utcToZonedTime(subMonths(new Date(), 1), 'America/Bogota'),
      'yyyy-MM-dd',
    ),
    to: format(utcToZonedTime(new Date(), 'America/Bogota'), 'yyyy-MM-dd', {
      timeZone: 'America/Bogota',
    }),
  });

  const [showModalGoogle, setShowModalGoogle] = useState<boolean>(false);

  const {dataRetrieve, refetchRetrieve, mutateSetState} = useOrders(
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

  useEffect(() => {
    refetchRetrieve()?.then(() => {
      setLoading(false);
    });
  }, [date, tab, itemsByPage, page, refetchRetrieve, initSearchData]);

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
    setPage(() => 1);
  };

  const handleSpecialPagination = (
    _event: ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPage(() => value);
  };

  const handleChangeStates = (e): void => {
    setStateSelected(e.target.value);
    setOpen(true);
  };

  const handleBtnYes = (): void => {
    setLoading(true);
    mutateSetState({
      items: Array.from(itemsSelected),
      statusId: PointerStates[stateSelected],
    })?.then(() => {
      setOpenModalChangeStates(false);
      setOpen(false);
      refetchRetrieve().then(() => {
        setLoading(false);
      });
    });
  };

  const validateAndSetStateSearch = (
    selectionModel: GridSelectionModel,
  ): boolean => {
    const res: OrderStatus[] = [];
    selectionModel?.forEach(i => {
      rows?.forEach(j => {
        if (j.id == i) {
          res.push(j.status);
        }
      });
    });

    const show = [...new Set(res.map(item => item.name))]?.length == 1;
    if (show) {
      setTabSearch(res.map(i => i.id)[0]);
    }
    return show;
  };

  const handleGrid = (selectionModel: GridSelectionModel): void => {
    if (
      selectionModel.length > 0 &&
      (searchData ? validateAndSetStateSearch(selectionModel) : tab > 0)
    ) {
      setCountCheckboxesSelected(selectionModel.length);
      setItemsSelected(selectionModel);
      setOpenModalChangeStates(true);
    } else {
      setOpenModalChangeStates(false);
    }
  };

  const searchOnBlur = (e: {target: {value: SetStateAction<string>}}): void => {
    const sD: string = e.target.value.toString();
    if (initSearchData != sD) {
      setSearchData((): string => sD);
      if (sD.length) {
        setItemsByPage(() => dropDownDefaultValueSearch);
      } else {
        setItemsByPage(() => dropDownDefaultValue);
      }
      setPage(() => 1);
      // setEnter(true);
      localStorage.setItem('searchData', e.target.value as string);
    }
  };

  const searchOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchBar(e.target.value);
  };

  const searchOnClear = (): void => {
    setSearchBar('');
    setSearchData('');
    setItemsByPage(dropDownDefaultValue);
    setOpenModalChangeStates(false);
    setPage(() => 1);
    localStorage.removeItem('searchData');
  };

  const handleSetItemsByPage = (item: number): void => {
    setItemsByPage(item);
    setPage(1);
  };

  const showModal = (): void => {
    setShowModalGoogle(true);
  };

  const closeModal = (): void => {
    setShowModalGoogle(false);
  };

  return (
    <>
      <ModalGeneric openModal={showModalGoogle} closeModal={closeModal} />
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
            onClear={searchOnClear}
            onChange={searchOnChange}
            value={searchBar}
            showClearButton
          />
        </WrapperSearchBar>
        <FiltersAndReport
          onChange={handleOnChangeDate}
          disabled={!searchData}
          showModal={showModal}
        />
        <SpecialLineTabs
          optionsTabs={
            searchData
              ? [{key: 'ALL', label: 'Resultados de busqueda', value: '0'}]
              : optionsTabs
          }
          onChange={handleOnChangeLineTabs}
        />
        {rows?.length == 0 ? (
          <EmptyStateSearch />
        ) : (
          <SpecialTableWithPagination
            formattedData={rows}
            dropDownDefaultValue={
              searchData ? dropDownDefaultValueSearch : dropDownDefaultValue
            }
            setItemsByPage={handleSetItemsByPage}
            handleSpecialPagination={handleSpecialPagination}
            page={page}
            itemsByPage={itemsByPage}
            totalItems={dataRetrieve?.pagination?.itemsNumber}
            handleGrid={handleGrid}
            columns={columns}
            checkboxSelection={true}
            onlyOneOption={!!searchData}
          />
        )}
        <ChangeStates
          currentStatus={searchData ? tabSearch : tab}
          open={openModalChangeStates}
          setOpen={setOpenModalChangeStates}
          count={countCheckboxesSelected}
          handleChangeStates={handleChangeStates}
        />
        <ModalYesNo {...{setOpen, open, handleBtnYes}} />
        <Backdrop open={loading} />
      </DashboardLayout>
    </>
  );
};
