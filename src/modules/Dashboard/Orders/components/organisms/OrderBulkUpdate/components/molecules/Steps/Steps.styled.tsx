import styled from 'styled-components';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const StepsContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const Help = styled.div`
  display: flex;
  align-items: center;
  margin: 70px 10px 0px 10px;
  padding: 12px;
  border-radius: 5px;
  background: #e9e9e9;
  font-size: 15px;
`;

export const HelpQuestionIcon = styled(HelpOutlineIcon)`
  color: #69757e;
  font-size: 32px !important;
  padding: 0px 7px 0px 5px;
`;

export const HelpStrong = styled.strong`
  padding: 0px 5px 0px 10px;
`;

export const HelpPlayIcon = styled(PlayCircleOutlineIcon)`
  padding-right: 5px;
`;

export const HelpLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0px 10px;
  color: #347af3;
  cursor: pointer;
`;

export const HeaderBannerEmpty = styled.div`
  margin: 70px 10px 0px 10px;
`;
