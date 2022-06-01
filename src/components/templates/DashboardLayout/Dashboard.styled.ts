import styled, {css} from 'styled-components';
import {Theme} from '@30sas/web-ui-kit-theme';
import {Row, Col} from 'react-styled-flexboxgrid';
import {Box, Typography} from '@30sas/web-ui-kit-core';

import {StyledBox} from './types';

export const ToastContainer = styled.div`
  top: 0;
  position: fixed;
  z-index: 1500;
  width: calc(100% - 240px);
`;
export const ToastContent = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1300;
  bottom: 0;
`;
export const HeaderContainer = styled(Row)`
  height: 4rem;
  width: 100vw;
  background: ${({theme}): string => theme.colors.neutrals[100]};
`;

export const HeaderRightContainer = styled(Col)`
  display: flex;
  flex: 1;
  margin-left: ${({theme}: {theme: Theme}): string => theme.utils.spacing(8)};
  align-items: center;
`;

export const HeaderLeftContainer = styled(Col)`
  display: flex;
  flex: 1;
  align-items: center;
  margin-right: ${({theme}: {theme: Theme}): string => theme.utils.spacing(8)};
`;

export const Title = styled(Typography)`
  padding: 0;
  margin: 0;
`;

export const ContentContainer = styled(Box)<StyledBox>`
  background-color: ${({theme}): string => theme.colors.gray[100]};
  margin-top: 64px;
  padding: ${({$withoutPadding}) => $withoutPadding ? 0 : "38.5px 32px 282px 16px"};
  flex-grow: 1;
  ${({$withoutPadding}) =>
    $withoutPadding
      ? css`
          min-height: calc(100vh - 64px);
        `
      : css`
          min-height: calc(100vh - 64px - (16px * 2));
        `};
`;

export const BottomToastContainer = styled.div<{$withPadding: boolean}>`
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 1500;
  width: auto;
`;
