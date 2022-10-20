import {FC} from 'react';

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
