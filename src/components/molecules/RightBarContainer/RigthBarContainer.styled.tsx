import styled from 'styled-components';

export const ContainerChildren = styled.div`
  height: calc(100% - 70px);
  margin-top: ${({theme}) => theme.utils.spacing(6)};
  margin-left: ${({theme}) => theme.utils.spacing(12)};
  margin-right: ${({theme}) => theme.utils.spacing(6)};
  width: ${({theme}) =>
    `calc(100% - ${theme.utils.spacing(12)} - ${theme.utils.spacing(6)})`};
`;
