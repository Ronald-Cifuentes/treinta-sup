import {CalendarStartEnd} from '../../types';

export interface SelectCalendarProps {
  date?: string | Date;
  changeDate?: ((value: CalendarStartEnd) => void) | undefined;
  children?: React.ReactNode; // 👈️ added type for children
}
