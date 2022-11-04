import {
  Colors,
  FontsName,
  FontVariant,
  GradientColor,
} from '@30sas/web-ui-kit-theme';
import {CSSProperties, ElementType, ReactNode} from 'react';

type TextDecoration = 'underline' | 'solid' | 'none' | 'line-through';

export interface TextProps {
  children: ReactNode;
  forwardedAs?: ElementType;
  className?: string;
  textAlign?: 'left' | 'right' | 'center';
  variant?: FontVariant;
  font?: FontsName;
  color?: Colors;
  colorType?: GradientColor;
  style?: CSSProperties;
  margin?: string;
  padding?: string;
  numberOfLines?: number;
  ellipsis?: boolean;
  uppercase?: boolean;
  lineHeight?: string;
  dataTestId?: string;
  onClick?: () => void;
  textDecoration?: TextDecoration;
}

export interface BaseProps {
  font: FontsName;
  variant: FontVariant;
  margin: string;
  padding: string;
  $color: string;
  $colorType: number | GradientColor;
  $numberOfLines?: number;
  ellipsis?: boolean;
  uppercase?: boolean;
  $lineHeight?: string;
  $textAlign?: 'left' | 'right' | 'center';
  $textDecoration?: TextDecoration;
}
