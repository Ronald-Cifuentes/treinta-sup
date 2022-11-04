import {Colors, GradientColor} from '@30sas/web-ui-kit-theme';
import React from 'react';

export interface StartEnd {
  start?: Date;
  end?: Date;
}

export type CalendarStartEnd = Date | null | undefined | StartEnd;

export type LocaleOptions = 'es' | 'en' | 'el' | 'pt';

export type TimeOptions = 'day' | 'year' | 'month';

export type DayOfWeekEs = 'L' | 'M' | 'W' | 'J' | 'V' | 'S' | 'D';
export type DayOfWeekEn = 'MO' | 'TU' | 'WE' | 'TH' | 'FR' | 'SA' | 'SU';

export type DaysOfWeek = Array<DayOfWeekEs | DayOfWeekEn>;

export type TreintaCalendarProps = {
  Icon?: React.FunctionComponent;
  maxDate?: Date | StartEnd;
  minDate?: Date | StartEnd;
  label?: string;
  textColor?: Colors;
  disabled?: boolean;
  dataTestId?: string;
  dataTestIdTextField?: string;
  dataTestIdTag?: string;
  required?: boolean;
  value?: number | Date;
  formatDate?: string;
  disablePast?: boolean;
  resetCalendar?: boolean;
  disableFuture?: boolean;
  locale: LocaleOptions;
  textColorType?: GradientColor;
  openTo: TimeOptions;
  views: Array<TimeOptions>;
  bottomTag?: string;
  onChange?: (value: CalendarStartEnd) => void;
  onClick?: () => void;
  shouldDisableDate?: (date: CalendarStartEnd) => boolean;
  disableSpecificDates?: Array<string>;
  disableDays?: DaysOfWeek;
};

export type CalendarRangeProps = {
  Icon?: string;
  label?: string;
  required?: boolean;
  resetCalendar?: boolean;
  locale: LocaleOptions;
  countCalendar?: 1 | 2 | 3;
  onChange?: (value: CalendarStartEnd) => void;
  valueWeek?: CalendarStartEnd;
  valueRange?: {[key: string]: Date};
};

export type TreintaCalendarPropsPick = Pick<
  TreintaCalendarProps,
  | 'Icon'
  | 'locale'
  | 'label'
  | 'onChange'
  | 'onClick'
  | 'formatDate'
  | 'dataTestId'
  | 'views'
>;

export type AnchorEl =
  | Element
  | ((element: Element) => Element)
  | null
  | undefined;
