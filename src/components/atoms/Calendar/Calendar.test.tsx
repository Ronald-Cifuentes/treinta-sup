/* eslint-disable jest/no-conditional-expect */
import {DateIcon} from '@30sas/web-ui-kit-icons';
import {screen, fireEvent, cleanup, renderTheme} from '__tests__/test-utils';

import userEvent from '@testing-library/user-event';
import {Calendar} from './Calendar';
import {LocaleOptions, TimeOptions} from './types';
import {
  currentDay,
  FormatDay,
  getNextDay,
  getPreviousDay,
} from './Calendar.func';
import {formattedTestDay} from './Calendar.mock';

const spyOnChange = jest.fn();
const spyOnClick = jest.fn();

// DTI - Data Test Id
const DTI_CALENDAR = 'mockedDateField';
const DTI_TEXT_FIELD = 'calendar-text-field';

const INVARIABLE_PROPS_DAY = {
  Icon: DateIcon,
  locale: 'es' as LocaleOptions,
  label: 'Calendario',
  onChange: spyOnChange,
  onClick: spyOnClick,
  formatDate: 'd MMM yyyy',
  dataTestId: DTI_CALENDAR,
  views: ['day'] as Array<TimeOptions>,
  openTo: 'day' as TimeOptions,
  value: formattedTestDay,
};

describe('<Calendar />', () => {
  beforeEach(cleanup);

  test('#1. Exist - should Calendar render', () => {
    renderTheme(<Calendar {...INVARIABLE_PROPS_DAY} />);
    const calendar = screen.getByTestId(DTI_CALENDAR);
    expect(calendar).toBeDefined();
  });

  test('#2. should onclick date', () => {
    renderTheme(<Calendar {...INVARIABLE_PROPS_DAY} />);
    const btnCalendar = screen.getByTestId(DTI_TEXT_FIELD);
    fireEvent.click(btnCalendar);
    expect(spyOnClick).toHaveBeenCalledTimes(1);
  });

  test('#3. not selected the testday', () => {
    renderTheme(<Calendar {...{...INVARIABLE_PROPS_DAY, value: undefined}} />);
    const btnCalendar = screen.getByTestId(DTI_TEXT_FIELD);
    userEvent.click(btnCalendar);
    const boxCalendarFuture = screen.getByText(formattedTestDay.getDate());
    expect(boxCalendarFuture).not.toHaveClass('Mui-selected');
  });

  test('#4. selected current day', () => {
    renderTheme(<Calendar {...INVARIABLE_PROPS_DAY} />);
    const btnCalendar = screen.getByTestId(DTI_TEXT_FIELD);
    userEvent.click(btnCalendar);
    const boxCalendarFuture = screen.getByText(currentDay);
    userEvent.click(boxCalendarFuture);
    expect(boxCalendarFuture).toHaveClass('Mui-selected');
  });

  test('#5. enable past and future day', () => {
    renderTheme(<Calendar {...INVARIABLE_PROPS_DAY} />);
    // Open PopUp Callendar
    const btnCalendar = screen.getByTestId(DTI_TEXT_FIELD);
    userEvent.click(btnCalendar);

    const previousDay = getPreviousDay(formattedTestDay);
    const nextDay = getNextDay(formattedTestDay);

    // Validate previous day
    const boxCalendarPast = screen.getByText(previousDay);
    expect(boxCalendarPast).not.toHaveClass('Mui-disabled');

    // Validate next day
    const boxCalendarFuture = screen.getByText(nextDay);
    expect(boxCalendarFuture).not.toHaveClass('Mui-disabled');
  });

  test('#6. disable past and future day', () => {
    renderTheme(
      <Calendar
        {...INVARIABLE_PROPS_DAY}
        disablePast={true}
        disableFuture={true}
      />,
    );

    // Open PopUp Callendar
    const btnCalendar = screen.getByTestId(DTI_TEXT_FIELD);
    userEvent.click(btnCalendar);

    const previousDay = getPreviousDay(formattedTestDay);
    const nextDay = getNextDay(formattedTestDay);

    // Validate previous day
    const boxCalendarPast = screen.getByText(previousDay);
    expect(boxCalendarPast).toHaveClass('Mui-disabled');

    // Validate next day
    const boxCalendarFuture = screen.getByText(nextDay);
    expect(boxCalendarFuture).toHaveClass('Mui-disabled');
  });

  test('#7. disable specific day', () => {
    const day = `${formattedTestDay.getFullYear()}-${
      formattedTestDay.getMonth() + 1
    }-${formattedTestDay.getDate() - 2}`;
    const selectedDay = FormatDay(day);

    renderTheme(
      <Calendar {...INVARIABLE_PROPS_DAY} disableSpecificDates={[day]} />,
    );

    // Open PopUp Callendar
    const btnCalendar = screen.getByTestId(DTI_TEXT_FIELD);
    userEvent.click(btnCalendar);

    // Validate selected day
    const boxCalendar = screen.getByText(selectedDay.getDate());
    expect(boxCalendar).toHaveClass('Mui-disabled');
  });

  test('#8. disable daysOfWeek', () => {
    renderTheme(
      <Calendar {...INVARIABLE_PROPS_DAY} disableDays={['D', 'TH']} />,
    );
    // Open PopUp Callendar
    const btnCalendar = screen.getByTestId(DTI_TEXT_FIELD);
    userEvent.click(btnCalendar);

    // Validate 2022-10-20
    const boxCalendarTH = screen.getByText(20);
    expect(boxCalendarTH).toHaveClass('Mui-disabled');

    // Validate 2022-10-09
    const boxCalendarD = screen.getByText(9);
    expect(boxCalendarD).toHaveClass('Mui-disabled');
  });
});
