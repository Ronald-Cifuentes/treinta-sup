import styled from 'styled-components';
import {TableVirtualized} from '@30sas/web-ui-kit-core';

export const MainContainer = styled.div`
  width: 100%;
`;

export const TableContainer = styled.div`
  height: 350px;
  width: 100%;
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

export const MainTable = styled(TableVirtualized)`
  td.MuiTableCell-root.MuiTableCell-sizeMedium {
    padding: 0px;
  }
`;
