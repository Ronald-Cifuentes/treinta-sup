import {GradientColor, ThemeColors} from '@30sas/web-ui-kit-theme';
import {BoxProps} from '@mui/material';
import {FC} from 'react';

export interface ContentBodyProps {
  handleDrawerToggle: () => void;
  baseColor: keyof ThemeColors | undefined;
  gradient: GradientColor | undefined;
  sizeFancyLine: string;
  title: JSX.Element | string;
  LeftOptions?: FC;
  withoutPadding: boolean;
}

export interface StyledBox extends BoxProps {
  $withoutPadding: boolean;
}
