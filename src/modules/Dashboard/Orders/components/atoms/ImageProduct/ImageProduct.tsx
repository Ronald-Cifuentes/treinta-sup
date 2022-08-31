import {FC} from 'react';
import BTN_ERROR_NUMBER from '../../../../../../Assets/BTN_ERROR_NUMBER.svg';
import BTN_SUCCESS from '../../../../../../Assets/BTN_SUCCESS.svg';
import {
  ContainerImageProduct,
  ImgProduct,
  TextNumber,
} from './ImageProduct.styled';
import {ImageProductProps} from './tyeps';

export const ImageProduct: FC<ImageProductProps> = ({count}) => (
  <ContainerImageProduct>
    <ImgProduct src={count ? BTN_ERROR_NUMBER : BTN_SUCCESS} />
    {!!count && <TextNumber>{count}</TextNumber>}
  </ContainerImageProduct>
);
