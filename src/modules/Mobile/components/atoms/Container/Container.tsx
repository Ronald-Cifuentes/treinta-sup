import styled from 'styled-components';
import {Grid} from '@30sas/web-ui-kit-core';

import {ContainerProps} from './types';

export const Container = styled(Grid)<ContainerProps>`
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: ${({theme}) => theme.utils.spacing(3)};
  background-color: ${({theme, $backgroundColor}) =>
    $backgroundColor || theme.colors.neutrals[100]};
`;
