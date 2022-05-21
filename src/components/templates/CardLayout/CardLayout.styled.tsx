import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: ${({theme}) => theme.colors.primary[200]};
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div<{width: string}>`
  width: ${({width}): string => width};
  border-radius: ${({theme}): string => theme.utils.spacing(4)};
  padding: ${({theme}): string => theme.spacing.xl};
  background: ${({theme}): string => theme.colors.neutrals[100]};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 4px 8px 0px rgba(34, 38, 42, 0.05);
`;
