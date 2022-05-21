import styled from 'styled-components';
import {Button, Alert} from '@30sas/web-ui-kit-core';
import {GoogleIcon} from '@30sas/web-ui-kit-icons';

export const Links = styled.div`
  display: flex;
  font-size: ${({theme}) => theme.utils.spacing(3)};
  align-items: center;
  margin-top: ${({theme}) => theme.utils.spacing(5)};
  color: ${({theme}) => theme.colors.neutrals[900]};
`;

export const LogoGoogle = styled(GoogleIcon)`
  width: ${({theme}) => theme.utils.spacing(5)};
  height: ${({theme}) => theme.utils.spacing(6)};
`;

export const ButtonGoogle = styled(Button)`
  &.MuiLoadingButton-root {
    margin-bottom: ${({theme}) => theme.utils.spacing(3)};
  }
`;

export const AlertSession = styled(Alert)`
  margin-bottom: ${({theme}) => theme.utils.spacing(8)};
`;
