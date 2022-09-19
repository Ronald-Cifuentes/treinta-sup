import styled from 'styled-components';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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

export const ErrorIcon = styled(ErrorOutlineIcon)`
  color: #971a11;
  width: 52px !important;
  height: 42px !important;
`;

export const BodyScroll = styled.div`
  width: 100%;
  height: 200px;
  overflow: scroll;
  scroll-behavior: smooth;
  text-align: start;
`;

export const UlError = styled.ul`
  padding: 0;
  background: #fff1f0;
  padding: 5px;
  font-weight: 400;
`;

export const HightLight = styled.strong`
  font-weight: 800;
`;

export const TitleErrorList = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
  padding-bottom: 15px;
`;
