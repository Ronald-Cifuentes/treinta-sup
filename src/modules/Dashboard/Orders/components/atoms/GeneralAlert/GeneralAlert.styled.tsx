import styled from 'styled-components';
import {CloseFilledIcon} from '@30sas/web-ui-kit-icons';
import {
  AlertContainerDangerProps,
  AlertContainerInfoProps,
  AlertContainerSuccessProps,
  AlertContainerWarningProps,
} from './types';

export const AlertContainerSuccess = styled.div<AlertContainerSuccessProps>`
  background-color: ${({theme}) => theme.colors.success[100]};
  padding: ${({theme}) => theme.utils.spacing(2, 4)};
  color: ${({theme}) => theme.colors.success[700]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${({border}) => border == 'radius' && 'border-radius: 8px;'};
`;

export const AlertIconSuccess = styled(CloseFilledIcon)`
  margin-top: ${({theme}) => theme.utils.spacing(2)};
  width: ${({theme}) => theme.utils.spacing(5)};
  height: ${({theme}) => theme.utils.spacing(5)};
  fill: ${({theme}) => theme.colors.success[700]};
`;

export const AlertContainerDanger = styled.div<AlertContainerDangerProps>`
  background-color: ${({theme}) => theme.colors.danger[100]};
  padding: ${({theme}) => theme.utils.spacing(2, 4)};
  color: ${({theme}) => theme.colors.danger[700]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({border}) => border == 'radius' && 'border-radius: 8px;'};
  /* border-radius: 8px; */
`;

export const AlertIconDanger = styled(CloseFilledIcon)`
  margin-top: ${({theme}) => theme.utils.spacing(2)};
  width: ${({theme}) => theme.utils.spacing(5)};
  height: ${({theme}) => theme.utils.spacing(5)};
  fill: ${({theme}) => theme.colors.danger[700]};
`;

export const AlertContainerWarning = styled.div<AlertContainerWarningProps>`
  background-color: ${({theme}) => theme.colors.warning[100]};
  padding: ${({theme}) => theme.utils.spacing(2, 4)};
  color: ${({theme}) => theme.colors.warning[700]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AlertIconWarning = styled(CloseFilledIcon)`
  margin-top: ${({theme}) => theme.utils.spacing(2)};
  width: ${({theme}) => theme.utils.spacing(5)};
  height: ${({theme}) => theme.utils.spacing(5)};
  fill: ${({theme}) => theme.colors.warning[700]};
`;

export const AlertContainerInfo = styled.div<AlertContainerInfoProps>`
  background-color: ${({theme}) => theme.colors.info[100]};
  padding: ${({theme}) => theme.utils.spacing(2, 4)};
  color: ${({theme}) => theme.colors.info[700]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AlertIconInfo = styled(CloseFilledIcon)`
  margin-top: ${({theme}) => theme.utils.spacing(2)};
  width: ${({theme}) => theme.utils.spacing(5)};
  height: ${({theme}) => theme.utils.spacing(5)};
  fill: ${({theme}) => theme.colors.info[700]};
`;
