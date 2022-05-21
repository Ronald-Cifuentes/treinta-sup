import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.primary[200]};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  margin-bottom: ${({theme}) => theme.utils.spacing(4)};
`;
