import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: ${({theme}) => theme.utils.spacing(8)};
  right: ${({theme}) => theme.utils.spacing(8)};
`;
