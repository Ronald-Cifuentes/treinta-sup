import styled from 'styled-components';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export const OrderBulkUpdateSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f1f0f2;
  padding: 0px;
  min-height: 100vh;
`;

export const IconCheck = styled(CheckCircleOutlinedIcon)`
  color: #009940;
  width: 74px !important;
  height: 74px !important;
`;

export const TextParagraphSuccess = styled.p`
  color: #00662b;
  width: 368px;
  height: 74px !important;
  text-align: center;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

export const ArrowBtn = styled(ArrowBackOutlinedIcon)`
  padding-right: 10px;
  height: 20px !important;
`;
