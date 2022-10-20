import {FC} from 'react';

export interface ContainerTag {
  iconLeft?: FC;
  iconExit?: FC;
  show?: boolean;
  iconLeftActive?: boolean;
  iconExitActive?: boolean;
  className?: string;
  label?: string;
  dataTestId?: string;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  variant: ColorTypesTag;
  size?: TagSizes;
}

export type ColorTypesTag =
  | 'info'
  | 'success'
  | 'default'
  | 'warning'
  | 'error';
export type TagSizes = 'small' | 'large';

export interface LabelVariants {
  variants: ColorTypesTag;
  size?: TagSizes;
}
