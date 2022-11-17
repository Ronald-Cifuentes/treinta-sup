import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const OrderBulkUpdateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f1f0f2;
  padding: 0px;
  min-height: 100vh;
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

export const GoBackButton = styled(ArrowBackIcon)`
  &.MuiSvgIcon-root {
    width: 80px;
    font-size: 30px;
    cursor: pointer;
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
