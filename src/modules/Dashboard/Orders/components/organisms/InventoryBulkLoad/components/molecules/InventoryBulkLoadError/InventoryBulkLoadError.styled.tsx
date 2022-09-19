import styled from 'styled-components';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export const InventoryBulkLoadErrorContainer = styled.div`
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

export const IconError = styled(InfoOutlinedIcon)`
  color: #d2392d;
  width: 74px !important;
  height: 74px !important;
`;

export const TextParagraphError = styled.p`
  color: #1a2732;
  width: 368px;
  height: 74px !important;
  text-align: center;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

export const LayoutButtons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const WrapButton = styled.div`
  display: flex;
  padding: 10px;
`;
