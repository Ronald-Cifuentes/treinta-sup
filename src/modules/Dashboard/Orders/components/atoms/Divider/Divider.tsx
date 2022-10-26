import styled, {StyledComponent} from 'styled-components';
import {Divider} from '@30sas/web-ui-kit-core';
import {OverridableComponent} from '@mui/material/OverridableComponent';
import {DividerTypeMap} from '@mui/material';

export const DividerStyled: StyledComponent<
  OverridableComponent<DividerTypeMap<object, 'hr'>>,
  object,
  {
    margin?: number[] | undefined;
  },
  never
> = styled(Divider)<{margin?: number[]}>`
  &.MuiDivider-root {
    margin: ${({theme, margin = [0]}) => theme.utils.spacing(...margin)};
    border: none;
  }
`;
