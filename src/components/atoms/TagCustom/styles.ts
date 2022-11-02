import styled, {css} from 'styled-components';

import {Typography} from '../Text';
import {ContainerTag, LabelVariants} from './types';

export const Container = styled.div<ContainerTag>`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({theme, show: visibilityContent = true, size}) => css`
    height: ${size === 'small'
      ? theme.utils.spacing(5)
      : theme.utils.spacing(6)};
    border-radius: ${theme.utils.spacing(1)};
    padding: ${theme.utils.spacing(0, 2, 0, 2)};
    visibility: ${visibilityContent ? 'block' : 'hidden'};
  `}
  ${({theme, variant}) => {
    switch (true) {
      case variant === 'default':
        return css`
          background: ${theme?.colors.gray[400]};
          & svg:first-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.gray[800]};
            }
          }
          & svg:last-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.gray[600]};
            }
          }
        `;
      case variant === 'success':
        return css`
          background: ${theme?.colors.success[200]};
          & svg:first-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.success[800]};
            }
          }
          & svg:last-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.success[600]};
            }
          }
        `;
      case variant === 'error':
        return css`
          background: ${theme?.colors.danger[100]};
          & svg:first-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.danger[700]};
            }
          }
          & svg:last-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.danger[700]};
            }
          }
        `;
      case variant === 'info':
        return css`
          background: ${theme?.colors.info[300]};
          & svg:first-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.info[700]};
            }
          }
          & svg:last-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.info[700]};
            }
          }
        `;
      case variant === 'warning':
        return css`
          background: ${theme?.colors.warning[300]};
          & svg:first-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.warning[900]};
            }
          }
          & svg:last-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.warning[700]};
            }
          }
        `;
      default:
        return css`
          background: ${theme?.colors.gray[400]};
          & svg:first-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.gray[800]};
            }
          }
          & svg:last-child {
            width: ${theme.utils.spacing(3)};
            height: ${theme.utils.spacing(3)};
            & path {
              fill: ${theme.colors.gray[600]};
            }
          }
        `;
    }
  }}
`;

export const Text = styled(Typography)<LabelVariants>`
  margin: ${({theme}) => theme.utils.spacing(0, 1, 0, 1)};
  ${({theme, size}) =>
    size === 'large'
      ? theme.fonts.nunito.smallbold
      : theme.fonts.nunito.xsmallbold};
  ${({theme, variants}) => {
    switch (true) {
      case variants === 'default':
        return css`
          color: ${theme?.colors.gray[800]};
        `;
      case variants === 'success':
        return css`
          color: ${theme?.colors.success[800]};
        `;
      case variants === 'error':
        return css`
          color: ${theme?.colors.danger[700]};
        `;
      case variants === 'info':
        return css`
          color: ${theme?.colors.info[900]};
        `;
      case variants === 'warning':
        return css`
          color: ${theme?.colors.warning[900]};
        `;
    }
  }};
`;
