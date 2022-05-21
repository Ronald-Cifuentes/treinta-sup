import styled from 'styled-components';
import {Divider} from '@30sas/web-ui-kit-core';

export const DividerStyled = styled(Divider)<{margin?: number[]}>`
  &.MuiDivider-root {
    margin: ${({theme, margin = [0]}) => theme.utils.spacing(...margin)};
    border: none;
  }
`;
