import {useTranslation} from 'react-i18next';
import {DateIcon} from '@30sas/web-ui-kit-icons';

import {Calendar, FormatDay} from 'components/atoms/Calendar';
import {formattedTestDay} from 'components/atoms/Calendar/Calendar.mock';

import {FC} from 'react';
import {Container, SelectDate} from './SelectCalendar.styled';

import {SelectCalendarProps} from './types';

const today = FormatDay(new Date());

export const SelectCalendar: FC<SelectCalendarProps> = ({
  date = today,
  changeDate,
}) => {
  const {t} = useTranslation();

  return (
    <Container data-testid="calendar_test">
      <SelectDate>
        <Calendar
          label={t('download_orders.select_date')}
          required={true}
          locale="es"
          Icon={DateIcon}
          onChange={changeDate}
          value={date as Date}
          formatDate="d MMM yyyy"
          dataTestId="mockedDateField"
          views={['month', 'day']}
          openTo="month"
          disablePast={false}
          disableFuture={true}
          disableSpecificDates={[
            `${formattedTestDay.getFullYear()}-${
              formattedTestDay.getMonth() + 1
            }-${formattedTestDay.getDate() - 2}`,
          ]}
          disableDays={['D']}
        />
      </SelectDate>
    </Container>
  );
};
