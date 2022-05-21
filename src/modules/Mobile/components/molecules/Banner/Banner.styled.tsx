import styled from 'styled-components';

import {ContainerProps} from './types';

export const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${({theme, $backgroundColor}) =>
    $backgroundColor || theme.colors.neutrals[100]};
  text-align: center;
  padding: ${({theme}) => theme.utils.spacing(2)};
`;
