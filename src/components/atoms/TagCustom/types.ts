import {FC} from 'react';

export type TagSizes = 'small' | 'large';

export type JustifyContentTag =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around';

export type ColorTypesTag =
  | 'info'
  | 'success'
  | 'default'
  | 'warning'
  | 'error';
export interface ContainerTag {
  iconLeft?: FC;
  iconExit?: FC;
  show?: boolean;
  iconLeftActive?: boolean;
  iconExitActive?: boolean;
  className?: string;
  label?: string;
  justifyContent?: JustifyContentTag;
  variant: ColorTypesTag;
  size?: TagSizes;
}

export interface LabelVariants {
  variants: ColorTypesTag;
  size?: TagSizes;
}
