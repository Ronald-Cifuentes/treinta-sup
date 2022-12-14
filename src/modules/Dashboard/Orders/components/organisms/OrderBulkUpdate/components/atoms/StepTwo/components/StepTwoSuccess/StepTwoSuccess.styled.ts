import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const StepTwoSuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 200px;
`;

export const ToastContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const TitleStepTwoSuccess = styled.div`
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
