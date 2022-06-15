import {ChangeEvent, FC, useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import {SpecialLineTabs} from 'components/atoms/SpecialLineTabs';
import {useOrders} from 'hooks/useOrders';
import {ApiMock, optionsTabs} from './Orders.mock';
import {FiltersAndReport} from './components/molecules/FiltersAndReport';
import {CalendarFromTo} from './components/molecules/FiltersAndReport/types';
import {format} from 'date-fns';

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

  const {dataRetrieve, refetchRetrieve} = useOrders({
    page: page,
    size: itemsByPage,
    statusId: tab,
    dateFrom: date?.from,
    dateTo: date?.to,
  });

  useEffect(() => {
    refetchRetrieve();
  }, [date, tab, itemsByPage, page]);

  // const {data} = ApiMock({
  //   page: page,
  //   size: itemsByPage,
  // });

  const handleOnChangeDate = (value: any): void => {
    const from = value?.dateOne ? value?.dateOne : value;
    const to = value?.dateTwo ? value?.dateTwo : value;

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
    event: ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPage(value);
  };

  /**TODO
   * BUG DE FECHA ANTERIOR A LA SELECCIONADA
   */

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
        formattedData={dataRetrieve}
        dropDownDefaultValue={dropDownDefaultValue}
        setItemsByPage={setItemsByPage}
        handleSpecialPagination={handleSpecialPagination}
        itemsByPage={itemsByPage}
        totalItems={dataRetrieve?.pagination?.itemsNumber}
      />
    </DashboardLayout>
  );
};
