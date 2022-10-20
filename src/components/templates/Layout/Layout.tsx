import {FC} from 'react';

import {StyledContainer} from './Layout.styled';

export const Layout: FC = ({children}) => (
  <StyledContainer data-testid="dashboard-layout">{children}</StyledContainer>
);
