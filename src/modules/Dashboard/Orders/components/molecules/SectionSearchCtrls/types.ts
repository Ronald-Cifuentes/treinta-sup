import {ChangeEvent} from 'react';

export interface SectionSearchCtrlsTypes {
  searchOnBlur?: React.FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  searchOnChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
}
