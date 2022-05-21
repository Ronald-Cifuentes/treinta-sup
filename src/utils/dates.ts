import dayjs from 'dayjs';

export const formatDate = (
  date: Date | string | number = new Date(),
  format = 'DD/MMM/YYYY',
): string => dayjs(date).format(format);

// 2022-01-12T23:17:46-05:00Z
// 2022-01-13T04:17:28.000Z

export const formatDateBackend = (
  date: Date | string | number = new Date(),
  format = 'YYYY-MM-DD' + 'T00:00:00.000',
): string => dayjs(date).format(format);

export const parseDate = (date: Date | string | number | undefined): Date =>
  dayjs(date).toDate();

export const getDateUtc = (): string => dayjs.utc().format();

export const isAfterOneWeekUtc = (date: string | number): boolean =>
  dayjs.utc().isAfter(date, 'week');

export const isSameHour = (date: Date | string): boolean =>
  dayjs().isSame(date, 'hour');

export const toUnix = (date: Date | string): number => dayjs(date).valueOf();
