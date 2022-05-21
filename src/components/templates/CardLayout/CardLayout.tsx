import {FC, ReactNode} from 'react';

import {PublicRoute} from 'routes/PublicRoute/PublicRoute';

import {Container, Card} from './CardLayout.styled';

export interface CardLayoutProps {
  width?: string;
  dataTestId?: string;
  children: ReactNode;
}

export const CardLayout: FC<CardLayoutProps> = ({
  children,
  width = '512px',
  dataTestId = 'card-layout',
}) => (
  <PublicRoute>
    <Container data-testid={dataTestId}>
      <Card width={width}>{children}</Card>
    </Container>
  </PublicRoute>
);
