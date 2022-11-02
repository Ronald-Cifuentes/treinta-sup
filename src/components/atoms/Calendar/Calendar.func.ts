import {daysOfWeekEn, daysOfWeekEs} from './Calendar.const';
import {DayOfWeekEn, DayOfWeekEs, DaysOfWeek, StartEnd} from './types';

export const getCounter = (views): number => {
  switch (true) {
    case views.length == 1 && views.includes('day'):
      return 1;
    case views.length == 1 && views.includes('month'):
      return 1;
    case views.length == 1 && views.includes('year'):
      return 1;
    default:
      return 0;
  }
};

export const currentDay = new Date().getDate();

export const getLastDayOfPreviousMonth = (): number => {
  const current = new Date();
  return new Date(current.getFullYear(), current.getMonth(), 0).getDate();
};

export const getLastDayOfCurrentMonth = (): number => {
  const current = new Date();
  return new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate();
};

export const getPreviousDay = (date?: Date): number => {
  let current: Date;
  if (date) {
    current = date;
  } else {
    current = new Date();
  }
  const previousDay = current.getDate() - 1;
  switch (true) {
    case previousDay == 0:
      return getLastDayOfPreviousMonth();
    case previousDay > 0:
      return previousDay;
    default:
      return 0;
  }
};

export const getNextDay = (date?: Date): number => {
  let current: Date;
  if (date) {
    current = date;
  } else {
    current = new Date();
  }
  const nextDay = current.getDate() + 1;
  switch (true) {
    case nextDay > getLastDayOfCurrentMonth():
      return 1;
    case nextDay <= getLastDayOfCurrentMonth():
      return nextDay;
    default:
      return 0;
  }
};

export const FormatDay = (date: string | Date): Date => {
  if (date) {
    return new Date(new Date(date).toLocaleString('en-US', {timeZone: 'UTC'}));
  } else {
    throw new Error('Define una fecha en FormatDay');
  }
};

export const formatDateToString = (item: string | Date): string => {
  if (item) {
    const date: Date = FormatDay(item);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  } else {
    throw new Error('Define una fecha en formatDateToString');
  }
};

export const formattArrayDate = (
  arr?: Array<string>,
): Array<string> | undefined => arr?.map(item => formatDateToString(item));

export const handleShouldDisableDate = (
  dateParam?: Date | StartEnd,
  disableSpecificDates?: Array<string>,
): boolean => {
  const arrDates = formattArrayDate(disableSpecificDates);
  const date = formatDateToString(dateParam as Date);
  return !!arrDates?.includes(date);
};

export const handleShouldDisableDays = (
  dateParam?: Date | StartEnd,
  disableDays?: DaysOfWeek,
): boolean =>
  disableDays?.includes(
    daysOfWeekEs[(dateParam as Date).getDay()] as DayOfWeekEs,
  ) ||
  disableDays?.includes(
    daysOfWeekEn[(dateParam as Date).getDay()] as DayOfWeekEn,
  ) ||
  false;
