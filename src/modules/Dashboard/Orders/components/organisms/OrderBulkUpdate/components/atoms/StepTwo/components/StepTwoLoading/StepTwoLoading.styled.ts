import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const StepTwoLoadingContainer = styled.div`
  width: 60%;
  display: flex;
  margin-left: 20%;
  margin-bottom: 10%;
  border-radius: 20px;
  padding: 20px 20px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  //Sombra
  box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
  -moz-box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
  -webkit-box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
`;

export const Actions = styled.div<{space?: string}>`
  margin-top: 5px;
  margin-bottom: ${({space}) => (space === 'min' ? '5px' : '50px')};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ToastContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const TitleStepTwoLoading = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const Card = styled.div<{
  display?: 'flex' | 'block';
}>`
  display: ${({display = 'flex'}) => display};
  width: 30%;
  min-width: 500px;
  flex-direction: row;
  padding: 24px;
  background: ${({theme}) => theme.colors.neutrals[100]};
  box-shadow: 2px 4px 8px rgba(34, 38, 42, 0.05);
  border-radius: 12px;
  margin-bottom: 16px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Size = styled.div`
  min-width: 100px;
`;

export const CheckCircleOutlineIconStyled = styled(CheckCircleOutlineIcon)`
  padding-right: 10px;
`;
