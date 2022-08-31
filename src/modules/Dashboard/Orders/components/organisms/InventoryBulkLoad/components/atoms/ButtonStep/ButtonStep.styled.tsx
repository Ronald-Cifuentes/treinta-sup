import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 220px;
  height: 40px;
  background: #fecb18;
  border-radius: 4px;
  border: 0px;
  font-weight: 700;
  font-size: 15px;
  &:disabled {
    background: #ecedef;
  }
`;
