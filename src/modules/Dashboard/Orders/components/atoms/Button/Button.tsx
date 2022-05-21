import styled from 'styled-components';
import {Button} from '@30sas/web-ui-kit-core';

export const ButtonStyled = styled(Button)<{margin?: string}>`
  &.MuiLoadingButton-root {
    margin: ${({margin = 0}) => margin};
  }
`;
