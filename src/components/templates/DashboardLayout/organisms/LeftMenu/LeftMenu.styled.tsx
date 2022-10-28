import styled from 'styled-components';

export const Gap = styled.div`
  flex-grow: 1;
`;

export const ProfileCard = styled.div`
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.gray[200]};
  border: 1px solid ${({theme}) => theme.colors.gray[200]};
`;

export const BusinessButtonsContainer = styled.div`
  padding: ${({theme}) => theme.utils.spacing(0, 3, 2, 3)};
`;

export const BusinessButtonsSeparator = styled.div`
  height: 0.5px;
  background-color: ${({theme}) => theme.colors.gray[500]};
  margin-bottom: ${({theme}) => theme.utils.spacing(2)};
`;

export const Box = styled.div<{margin?: string}>`
  margin: ${({margin = '0'}) => margin};
`;

export const BoxComingSoon = styled.div`
  display: flex;
  align-items: center;
  pointer-events: none;
  justify-content: space-between;
`;

export const UserBox = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  background: #f4f5f6;
  border-radius: 10px;
  margin: 48px 0px 68px 0px;
  padding: 11px 0px 13px 12px;
`;

export const UserIcon = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const UserName = styled.p`
  display: flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  font-style: normal;
  align-items: center;
  font-family: 'Nunito Sans';
`;

export const SubtitleSidebar = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  color: #67737e;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  font-style: normal;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  letter-spacing: 0.03em;
  padding: 8px 4px 8px 8px;
  text-transform: uppercase;
  font-family: 'Nunito Sans', sans-serif;
`;
