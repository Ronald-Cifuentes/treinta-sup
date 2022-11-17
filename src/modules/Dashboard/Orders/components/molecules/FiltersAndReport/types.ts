import {TreintaSelectedCalendarType} from '@30sas/web-ui-kit-core';

export interface PropTypesDateRage {
  start?: string | Date;
  end?: string | Date;
}

export interface CalendarFromTo {
  from?: string | Date;
  to?: string | Date;
}

export interface ReturnDate {
  dateOne: string;
  dateTwo: string;
}
export interface PropTypesFiltersAndReport {
  disabled?: boolean;
  showModal?: () => void;
  onChange?: (e: ReturnDate, type: TreintaSelectedCalendarType) => void;
  dataTestId?: string;
  dataTestIdDataStudio?: string;
  dataTestIdOrderUpdate?: string;
  dataTestIdCalendarInput?: string;
}
