import styled from 'styled-components';

import {LogoTreintaStyled} from './types';

export const LogoContainer = styled.div<LogoTreintaStyled>`
  display: flex;
  align-items: center;
  margin-bottom: ${({theme, $withMargin}) =>
    $withMargin && theme.utils.spacing(8)};

  svg {
    width: ${({$isSmall}) => ($isSmall ? '100px' : '148px')};
    height: ${({$isSmall}) => ($isSmall ? '50px' : '48px')};
    margin-right: ${({theme}) => theme.utils.spacing(3)};
  }
`;
