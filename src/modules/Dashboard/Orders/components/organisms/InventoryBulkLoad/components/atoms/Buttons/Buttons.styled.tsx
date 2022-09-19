import styled from 'styled-components';

export const ButtonSuccess = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 220px;
  height: 40px;
  background: #009940;
  color: white;
  border-radius: 4px;
  border: 0px;
  font-weight: 700;
  font-size: 15px;
  &:disabled {
    background: #ecedef;
  }
`;

export const ButtonWarning = styled.button`
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

export const ButtonInfo = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 200px;
  height: 40px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #1a2732;
  font-weight: 700;
  font-size: 15px;
  &:disabled {
    background: #ecedef;
  }
`;
