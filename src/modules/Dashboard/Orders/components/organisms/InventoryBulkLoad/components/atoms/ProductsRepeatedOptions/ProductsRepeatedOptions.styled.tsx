import styled from 'styled-components';

export const Card = styled.div<{active: boolean}>`
  width: 100%;
  display: flex;
  background: #ffffff;
  border: 0.5px solid #c7ccd1;
  box-sizing: border-box;
  border-radius: 12px;
  margin-top: 8px;
  &:hover {
    border: 1px solid #009940;
  }
  ${({active}) => active && `border: 1px solid #009940;`}
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 56px;
  height: 56px;
  background: #f4f5f6;
  border-radius: 8px;
  margin: 10px;
`;
