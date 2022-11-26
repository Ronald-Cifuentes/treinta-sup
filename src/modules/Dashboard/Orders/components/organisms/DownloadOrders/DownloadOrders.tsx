import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ColorProps} from '@30sas/web-ui-kit-theme';

import {DashboardLayout} from 'components/templates';

import {Delivers} from './components/Delivers';
import {Instructions} from './components/Instructions';
import {SelectCalendar} from './components/SelectCalendar';

import {Title, Header, Content, Container} from './DownloadOrders.styled';
import {CalendarStartEnd} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

export const DownloadOrders: FC = () => {
  const {t} = useTranslation();

  const [value, setValue] = useState<string | Date>(new Date());

  const handleChangeDate = (valueChangeDate: CalendarStartEnd): void => {
    setValue(valueChangeDate as string | Date);
  };

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <Container>
        <Header>
          <Title>{t('download_orders.title')}</Title>
        </Header>
        <Content>
          <Instructions />
          <SelectCalendar date={value} changeDate={handleChangeDate} />
          <Delivers date={value} />
        </Content>
      </Container>
    </DashboardLayout>
  );
};
