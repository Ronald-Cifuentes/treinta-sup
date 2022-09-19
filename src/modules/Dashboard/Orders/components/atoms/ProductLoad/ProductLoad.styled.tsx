import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export const LoadImage = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #176bf3;
`;

export const HideInput = styled.input`
  display: none;
`;

export const Error = styled.div`
  color: red;
`;

export const Arrow = styled(ArrowForwardIosIcon)`
  height: 14px !important;
`;
