import {FC} from 'react';

import {BannerProps} from './types';
import {Container} from './Banner.styled';

export const Banner: FC<BannerProps> = ({backgroundColor, children}) => (
  <Container $backgroundColor={backgroundColor}>{children}</Container>
);
