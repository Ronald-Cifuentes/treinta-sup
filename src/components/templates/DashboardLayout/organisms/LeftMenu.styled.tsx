import styled from 'styled-components';

export const Gap = styled.div`
  flex-grow: 1;
`;

export const ProfileCard = styled.div`
  background-color: ${({theme}) => theme.colors.gray[200]};
  border: 1px solid ${({theme}) => theme.colors.gray[200]};
  border-radius: 8px;
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
