import styled from 'styled-components';

export const IconContainer = styled.div<{
  $backgroundColor: string;
}>`
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${({$backgroundColor}) => $backgroundColor};
  border-radius: 8px;
  width: 35px;
  height: 35px;
  padding: 10.5px;
  margin-right: 16px;
`;

export const Card = styled.div<{
  display?: 'flex' | 'block';
}>`
  display: ${({display = 'flex'}) => display};
  width: 60%;
  flex-direction: row;
  padding: 24px;
  background: ${({theme}) => theme.colors.neutrals[100]};
  box-shadow: 2px 4px 8px rgba(34, 38, 42, 0.05);
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
`;
