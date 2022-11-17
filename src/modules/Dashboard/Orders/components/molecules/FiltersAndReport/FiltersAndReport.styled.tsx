import styled from 'styled-components';
import SyncIcon from '@mui/icons-material/Sync';
import {ButtonWarning} from 'components/atoms/Buttons/Buttons.styled';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarContainer = styled.div`
  display: flex;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  width: 200px;
  height: 24px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const DownloadLink = styled.a`
  color: #1a2732;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  font-style: normal;
  font-family: 'Nunito Sans', sans-serif;
`;

export const Modal = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const UpdateButton = styled(ButtonWarning)`
  width: 200px;
  white-space: nowrap;
`;

export const UpdateIcon = styled(SyncIcon)`
  margin: 0px 5px 0px 0px;
`;
