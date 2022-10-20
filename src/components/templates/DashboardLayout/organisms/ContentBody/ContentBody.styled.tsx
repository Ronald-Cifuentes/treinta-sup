import {Box, Typography} from '@30sas/web-ui-kit-core';
import {Theme} from '@30sas/web-ui-kit-theme';
import {BoxTypeMap} from '@mui/material';
import {OverridableComponent} from '@mui/material/OverridableComponent';
import {Col, Row} from 'react-styled-flexboxgrid';
import styled, {css, StyledComponent} from 'styled-components';
import {StyledBox} from './types';

export const Title = styled(Typography)`
  padding: 0;
  margin: 0;
`;

export const HeaderContainer = styled(Row)`
  height: 4rem;
  width: 100vw;
  background: ${({theme}): string => theme.colors.neutrals[100]};
`;

export const ContentContainer: StyledComponent<
  OverridableComponent<BoxTypeMap<StyledBox, 'div'>>,
  object,
  object,
  never
> = styled(Box)<StyledBox>`
  background-color: ${({theme}): string => theme.colors.gray[100]};
  margin-top: 64px;
  padding: ${({$withoutPadding}) =>
    $withoutPadding ? 0 : '38.5px 32px 282px 16px'};
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

export const HeaderLeftContainer = styled(Col)`
  display: flex;
  flex: 1;
  align-items: center;
  margin-right: ${({theme}: {theme: Theme}): string => theme.utils.spacing(8)};
`;

export const HeaderRightContainer = styled(Col)`
  display: flex;
  flex: 1;
  margin-left: ${({theme}: {theme: Theme}): string => theme.utils.spacing(8)};
  align-items: center;
`;
