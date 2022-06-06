import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import SpecialTableWithPagination from 'components/molecules/SpecialTableWithPagination/SpecialTableWithPagination';
import {optionsTabs} from './Mocks'
import SpecialLineTabs from 'components/atoms/SpecialLineTabs';
import FiltersAndReport from './components/molecules/FiltersAndReport/FiltersAndReport';
import '@fortawesome/fontawesome-free'

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

export const Orders: FC = () => {
  const {t} = useTranslation()
  const [date, setDate] = useState<Date | Object >()
  const [tab, setTab] = useState<number>(0)

  const handleOnChangeDate = (value: Record<string, Date>) => {
    setDate(value)
  }

  const handleOnChangeLineTabs = (value: React.SetStateAction<number>) => {
    setTab(value)
  }

  return (
    <DashboardLayout
      title={t('orders.title')}
      fancyLineProps={LINE_PROPS}
      sizeFancyLine="0.5px">
        <FiltersAndReport onChange={handleOnChangeDate}/>
        <SpecialLineTabs optionsTabs={optionsTabs} onChange={handleOnChangeLineTabs}/>
        <SpecialTableWithPagination date={date} tab={tab}/>
    </DashboardLayout>
  );
};

