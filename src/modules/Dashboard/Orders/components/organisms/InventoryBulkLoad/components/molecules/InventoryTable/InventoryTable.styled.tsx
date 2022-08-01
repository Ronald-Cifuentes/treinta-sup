import styled from 'styled-components';
import {CloseFilledIcon} from '@30sas/web-ui-kit-icons';

export const MainContainer = styled.div`
  width: 100%;
`;

export const TableContainer = styled.div`
  height: 645px;
  min-width: 659px;
`;

export const AlertContainer = styled.div`
  background-color: ${({theme}) => theme.colors.info[100]};
  padding: ${({theme}) => theme.utils.spacing(2, 4)};
  color: ${({theme}) => theme.colors.info[700]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AlertIcon = styled(CloseFilledIcon)`
  margin-top: ${({theme}) => theme.utils.spacing(2)};
  width: ${({theme}) => theme.utils.spacing(5)};
  height: ${({theme}) => theme.utils.spacing(5)};
  fill: ${({theme}) => theme.colors.info[700]};
`;

export const ProductNameContainer = styled.div`
  display: flex;
`;

export const ProductImg = styled.img`
  width: ${({theme}) => theme.utils.spacing(8)};
  height: ${({theme}) => theme.utils.spacing(8)};
  border-radius: ${({theme}) => theme.corners.lg};
  margin: ${({theme}) => theme.utils.spacing(0, 3)};
`;

export const ProductNameText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
