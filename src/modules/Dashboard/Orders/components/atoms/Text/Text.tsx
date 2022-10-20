import {FC} from 'react';
import {Variants, FontsName} from '@30sas/web-ui-kit-theme';

import {TextProps} from './types';
import {BaseTypography} from './styles';

export const Typography: FC<TextProps> = ({
  children,
  className,
  lineHeight,
  variant = 'Medium',
  font = FontsName.Nunito,
  forwardedAs = 'p',
  color = 'neutrals',
  colorType = 900,
  numberOfLines = 1,
  ellipsis = false,
  uppercase = false,
  textAlign,
  dataTestId = 'default-typography',
  textDecoration,
  onClick,
  ...props
}) => (
  <BaseTypography
    onClick={onClick}
    className={className}
    font={font}
    variant={variant}
    as={forwardedAs}
    $color={color}
    $colorType={colorType}
    $textAlign={textAlign}
    ellipsis={ellipsis}
    data-testid={dataTestId}
    uppercase={uppercase}
    $textDecoration={textDecoration}
    $numberOfLines={numberOfLines}
    $lineHeight={lineHeight}
    {...props}>
    {children}
  </BaseTypography>
);

export {Variants};
