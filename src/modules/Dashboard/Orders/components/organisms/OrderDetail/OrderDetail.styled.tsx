import styled from 'styled-components';
import {CloseFilledIcon} from '@30sas/web-ui-kit-icons';

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f0f2;
  padding: 24px 0px 0px 5px;
`;

export const DetailTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  color: #1a2732;

  font-family: 'Nunito Sans', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  height: auto;
  width: 100%;
`;

export const CardinalSection = styled.div`
  display: flex;
`;

export const WrapperQuantityInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

export const AlertSuccess = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  align-items: center;
  font-size: 20px;
  padding: 10px;
  background: #e7f0fe;
  font-weight: 400;
  color: #0946aa;
  font-size: 16px;
  line-height: 24px;
`;
export const AlertSuccessText = styled.div`
  padding-left: 10px;
`;

export const AlertError = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  flex-direction: column;
  font-size: 20px;
  border: 2px solid red;
  padding: 10px;
  border-radius: 5px;
  background: lightcoral;
`;

export const AlertErrorStrong = styled.strong`
  display: flex;
  align-items: center;
`;

export const EmptySpace = styled.div`
  width: 20%;
`;

export const CloseButton = styled(CloseFilledIcon)`
  display: block;
  cursor: pointer;
  z-index: 10000;
  ${({theme}) => `
    top: ${theme.utils.spacing(4.5)};
    right: ${theme.utils.spacing(4.5)};
    width: ${theme.utils.spacing(6.5)};
    height: ${theme.utils.spacing(6.5)};
  `}
  & path {
    fill: #0946aa;
  }
`;
export const CloseButtonError = styled(CloseFilledIcon)`
  display: block;
  cursor: pointer;
  z-index: 10000;
  ${({theme}) => `
    top: ${theme.utils.spacing(4.5)};
    right: ${theme.utils.spacing(4.5)};
    width: ${theme.utils.spacing(6.5)};
    height: ${theme.utils.spacing(6.5)};
  `}
  & path {
    fill: black;
  }
`;
