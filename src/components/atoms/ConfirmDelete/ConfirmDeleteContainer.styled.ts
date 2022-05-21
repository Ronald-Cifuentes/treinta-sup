import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin: ${({theme}) => theme.utils.spacing(6)} 0;
  & > .MuiButton-root {
    margin-right: ${({theme}) => theme.utils.spacing(4)};
    &:last-child {
      margin-right: 0;
    }
  }
`;
