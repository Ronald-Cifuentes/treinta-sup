import styled from 'styled-components';

import {Grid, Typography} from '@30sas/web-ui-kit-core';

export const ParentContainer = styled(Grid)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TitleSku = styled(Typography)`
  text-align: center;
  ${({theme}) => theme.fonts.nunito.xlargerbold};
  color: ${({theme}) => theme.colors.secondary['700']};
`;

export const ContainerText = styled.div`
  width: 540px;
`;

export const ItemContainer = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const EmptyTypographyStyled = styled(Typography)<{marginX: string}>`
  text-align: center;
  margin: ${({marginX}) => `24px ${marginX} 24px ${marginX}`};
`;
