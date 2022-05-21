import {FC} from 'react';
import {BoxProps} from '@mui/material';
import {ColorProps} from '@30sas/web-ui-kit-theme';

export interface DashboardContextProps {
  RightBar?: FC;
}

export interface DashboardLayoutProps extends DashboardContextProps {
  title: JSX.Element | string;
  fancyLineProps: ColorProps;
  sizeFancyLine?: string;
  LeftOptions?: FC;
  withoutPadding?: boolean;
}

export interface StyledBox extends BoxProps {
  $withoutPadding: boolean;
}
