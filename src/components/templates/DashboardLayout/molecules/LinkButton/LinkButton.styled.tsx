import styled from 'styled-components';

export const Line = styled.div`
  position: absolute;
  height: 36px;
  width: 4px;
  left: 0px;
  background-color: ${({theme}) => theme.colors.primary[500]};
`;
