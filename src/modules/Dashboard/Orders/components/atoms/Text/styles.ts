import styled, {css} from 'styled-components';
import {Variants} from '@30sas/web-ui-kit-theme';

import {BaseProps} from './types';

export const BaseTypography = styled.p<BaseProps>`
  ${({theme, variant, font}) => ({
    ...theme.fonts[font][Variants[variant]],
  })};
  margin: ${({margin}) => (margin ? margin : '1em')};
  padding: ${({padding}) => (padding ? padding : '0')};
  color: ${({$color, $colorType, theme}) => theme.colors[$color][$colorType]};
  text-transform: ${({uppercase}) => (uppercase ? 'uppercase' : 'none')};
  text-align: ${({$textAlign}) => $textAlign};
  text-decoration: ${({$textDecoration}) => $textDecoration};
  ${({ellipsis, $numberOfLines}) =>
    ellipsis === true &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${$numberOfLines};
      -webkit-box-orient: vertical;
      word-break: break-word;
    `}
  ${({$lineHeight}) => $lineHeight && `line-height: ${$lineHeight}`};
`;
