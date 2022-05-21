import {FC} from 'react';
import {FontVariant} from '@30sas/web-ui-kit-theme';

export interface LinkButtonProps {
  disabled?: boolean;
  variant?: FontVariant;
  icon: FC;
  externalLink?: string;
  label: string;
  href?: string;
  width?: string;
  onClick?: () => void;
  colorBg?: string;
  colorBgType?: string;
  labelColorTypes?: string;
  labelColors?: string;
  margin?: string;
  padding?: string;
  marginIcon?: string;
  target?: string;
  dataTestId?: string;
}
