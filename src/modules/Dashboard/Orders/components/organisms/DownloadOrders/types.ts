export interface StartEnd {
  start?: Date;
  end?: Date;
}

export type CalendarStartEnd = Date | null | undefined | StartEnd;
