import styled from 'styled-components';
import {Button} from '@30sas/web-ui-kit-core';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const InventoryBulkLoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f1f0f2;
  padding: 0px;
  min-height: 100vh;
`;

export const Gap = styled.div`
  flex-grow: 1;
`;

export const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  width: calc(100% - 240px);
  background: ${({theme}) => theme.colors.neutrals[100]};
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border: 0.5px solid #e0e3e5;
  padding-right: 20px;
`;

export const ButtonStyled = styled(Button)<{margin?: string}>`
  &.MuiLoadingButton-root {
    margin: ${({margin = 0}) => margin};
  }
`;

export const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: calc(100% - 240px);
  background: ${({theme}) => theme.colors.neutrals[100]};
  height: 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 0.5px solid #e0e3e5;

  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1a2732;
`;

export const GoBackButton = styled(ArrowBackIcon)`
  &.MuiSvgIcon-root {
    width: 80px;
    font-size: 30px;
    cursor: pointer;
  }
`;
