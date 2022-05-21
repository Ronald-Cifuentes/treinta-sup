import styled from 'styled-components';
import {Typography} from '@30sas/web-ui-kit-core';
import {WarningIcon as BaseWarningIcon} from '@30sas/web-ui-kit-icons';

export const ElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${({theme}) => theme.utils.spacing(9)};
`;
export const ContentRightBar = styled.div`
  padding-right: ${({theme}) => theme.utils.spacing(7)};
  padding-left: ${({theme}) => theme.utils.spacing(7)};
`;
export const WarningIcon = styled(BaseWarningIcon)`
  height: ${({theme}) => theme.utils.spacing(14)};
  width: ${({theme}) => theme.utils.spacing(14)};
  margin-bottom: ${({theme}) => theme.utils.spacing(4)};
`;

export const Title = styled(Typography)`
  margin: 0 0 ${({theme}) => theme.utils.spacing(2)} 0;
`;

export const Text = styled(Typography)`
  margin: 0 0 ${({theme}) => theme.utils.spacing(6)} 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  & > .MuiButton-root {
    margin-right: ${({theme}) => theme.utils.spacing(4)};
    &:last-child {
      margin-right: 0;
    }
  }
`;
