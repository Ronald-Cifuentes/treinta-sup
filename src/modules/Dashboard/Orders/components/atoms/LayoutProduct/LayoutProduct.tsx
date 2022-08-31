import {FC} from 'react';
import Logo from '../../../../../../Assets/LOGO_INACTIVE.svg';
import {
  Image,
  LayoutProductContainer,
  LayoutText,
  TitleCategory,
  TitleName,
} from './LayoutProduct.styled';
import {LayoutProductProps} from './types';

export const LayoutProduct: FC<LayoutProductProps> = ({product}) => (
  <LayoutProductContainer>
    <Image src={product?.image ? product?.image : Logo} />
    <LayoutText>
      <TitleName>{product?.name}</TitleName>
      <TitleCategory>{product?.category}</TitleCategory>
    </LayoutText>
  </LayoutProductContainer>
);
