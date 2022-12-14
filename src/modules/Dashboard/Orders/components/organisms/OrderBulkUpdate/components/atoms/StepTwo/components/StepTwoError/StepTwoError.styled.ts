import {SpecialTableWithPagination} from 'components/molecules/SpecialTableWithPagination';
import styled from 'styled-components';
import {Typography} from '@30sas/web-ui-kit-core';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';

export const StepTwoErrorContainer = styled.div`
  padding-bottom: 200px;
`;

export const ToastErrorContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TitleStepTwoError = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  color: red !important;
`;

export const TypographyCustom = styled(Typography)`
  color: ${({theme}) => theme?.colors.danger[700]};
`;

export const TableMuiCustom = styled(SpecialTableWithPagination)`
  & .MuiDataGrid-columnHeaderTitle {
    color: ${({theme}) => theme?.colors.danger[700]};
    font-size: ${({theme}) => theme?.utils.spacing(5)};
    font-weight: ${TreintaTheme.fonts['nunito'].xxlargebold.fontWeight};
  }
`;
