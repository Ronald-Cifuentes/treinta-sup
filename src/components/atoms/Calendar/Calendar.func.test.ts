import {cleanup} from '__tests__/test-utils';
import {
  formatDateToString,
  FormatDay,
  formattArrayDate,
  getLastDayOfCurrentMonth,
  getLastDayOfPreviousMonth,
  getNextDay,
  getPreviousDay,
  handleShouldDisableDate,
  handleShouldDisableDays,
} from './Calendar.func';
import {formattedTestDay, testDay} from './Calendar.mock';

describe('Calendar.func', () => {
  beforeEach(cleanup);

  test('#1. getLastDayOfPreviousMonth', () => {
    const current = new Date();
    expect(getLastDayOfPreviousMonth()).toBe(
      new Date(current.getFullYear(), current.getMonth(), 0).getDate(),
    );
  });

  test('#2. getLastDayOfPreviousMonth', () => {
    const current = new Date();
    expect(getLastDayOfCurrentMonth()).toBe(
      new Date(current.getFullYear(), current.getMonth() + 1, 0).getDate(),
    );
  });

  test('#3. getPreviousDay - Without parameters', () => {
    const current = new Date();
    const previousDay = current.getDate() - 1;
    let validate: unknown;
    if (previousDay == 0) {
      validate = getLastDayOfPreviousMonth();
    }
    if (previousDay > 0) {
      validate = previousDay;
    }
    expect(getPreviousDay()).toBe(validate);
  });

  test('#4. getPreviousDay - With parameters', () => {
    expect(getPreviousDay(FormatDay('2020-10-01'))).toBe(30);
    expect(getPreviousDay(FormatDay('2020-10-05'))).toBe(4);
  });

  test('#5. getNextDay - Without parameters', () => {
    const current = new Date();
    const nextDay = current.getDate() + 1;
    let validate: unknown;
    if (nextDay > getLastDayOfCurrentMonth()) {
      validate = 1;
    }
    if (nextDay <= getLastDayOfCurrentMonth()) {
      validate = nextDay;
    }
    expect(getNextDay()).toBe(validate);
  });

  test('#6. getNextDay - With parameters', () => {
    expect(getNextDay(FormatDay('2022-10-17'))).toBe(18);
    expect(getNextDay(FormatDay('2022-10-31'))).toBe(1);
  });

  test('#7. FormatDay - Without parameters', () => {
    expect(FormatDay).toThrow(Error);
    expect(FormatDay).toThrow('Define una fecha en FormatDay');
  });

  test('#8. FormatDay - With parameter', () => {
    expect(FormatDay(testDay).toString()).toBe(
      new Date(
        new Date(testDay).toLocaleString('en-US', {timeZone: 'UTC'}),
      ).toString(),
    );
  });

  test('#8. formatDateToString - Witout parameters', () => {
    expect(formatDateToString).toThrow(Error);
    expect(formatDateToString).toThrow(
      'Define una fecha en formatDateToString',
    );
  });

  test('#9. formatDateToString - With parameters', () => {
    const date: Date = FormatDay(new Date());
    expect(formatDateToString(new Date())).toBe(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    );
  });

  test('#10. formattArrayDate', () => {
    expect(formattArrayDate([formattedTestDay.toString()])).toStrictEqual([
      `${formattedTestDay.getFullYear()}-${
        formattedTestDay.getMonth() + 1
      }-${formattedTestDay.getDate()}`,
    ]);
  });

  test('#11. handleShouldDisableDate', () => {
    expect(
      handleShouldDisableDate(formattedTestDay, [formattedTestDay.toString()]),
    ).toStrictEqual(true);
  });

  test('#12. handleShouldDisableDays - Español', () => {
    expect(
      handleShouldDisableDays(FormatDay('2022-10-03'), ['L']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-04'), ['M']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-05'), ['W']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-06'), ['J']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-07'), ['V']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-08'), ['S']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-09'), ['D']),
    ).toStrictEqual(true);
  });

  test('#13. handleShouldDisableDays - Inglés', () => {
    expect(
      handleShouldDisableDays(FormatDay('2022-10-03'), ['MO']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-04'), ['TU']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-05'), ['WE']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-06'), ['TH']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-07'), ['FR']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-08'), ['SA']),
    ).toStrictEqual(true);
    expect(
      handleShouldDisableDays(FormatDay('2022-10-09'), ['SU']),
    ).toStrictEqual(true);
  });
});
