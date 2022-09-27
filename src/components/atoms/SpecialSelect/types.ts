import {OptionsType} from 'hooks/useCommonDocumentTypes';

export interface SpecialSelectTypes {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  defaultText?: string;
  defaultSelected?: string | number;
  options?: OptionsType[];
  label?: string;
  style?: React.CSSProperties;
  styleLabel?: React.CSSProperties;
  styleOptions?: React.CSSProperties;
  className?: string;
}
