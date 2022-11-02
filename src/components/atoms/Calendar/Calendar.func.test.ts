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

  test('#3. getPreviousDay', () => {
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

  test('#4. getNextDay', () => {
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

  test('#5. FormatDay', () => {
    expect(FormatDay(testDay).toString()).toBe(
      new Date(
        new Date(testDay).toLocaleString('en-US', {timeZone: 'UTC'}),
      ).toString(),
    );
  });

  test('#6. formatDateToString', () => {
    const date: Date = FormatDay(new Date());
    expect(formatDateToString(new Date())).toBe(
      `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    );
  });

  test('#7. formattArrayDate', () => {
    expect(formattArrayDate([formattedTestDay.toString()])).toStrictEqual([
      `${formattedTestDay.getFullYear()}-${
        formattedTestDay.getMonth() + 1
      }-${formattedTestDay.getDate()}`,
    ]);
  });

  test('#8. handleShouldDisableDate', () => {
    expect(
      handleShouldDisableDate(formattedTestDay, [formattedTestDay.toString()]),
    ).toStrictEqual(true);
  });

  test('#9. handleShouldDisableDays', () => {
    expect(handleShouldDisableDays(formattedTestDay, ['M'])).toStrictEqual(
      true,
    );
  });
});
