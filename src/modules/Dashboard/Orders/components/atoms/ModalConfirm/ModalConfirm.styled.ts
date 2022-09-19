import styled from 'styled-components';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export const BodyModal = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export const HeadModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px 8px 16px;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a2732;
  text-align: center;
`;

export const LayoutModal = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const WrapperButtonCancel = styled.div`
  margin-left: 10px;
`;

export const WarningIcon = styled(WarningAmberIcon)`
  color: #f2930d;
  width: 52px !important;
  height: 42px !important;
`;
