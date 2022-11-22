import styled from 'styled-components';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';

export const ContainerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid #ededef;
  background: ${TreintaTheme.colors.neutrals};
`;

export const RowPlace = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: ${TreintaTheme.spacing.sm};
  margin-bottom: ${TreintaTheme.spacing.sm};
`;

export const RowBatches = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: ${TreintaTheme.spacing.sm};
  margin-bottom: ${TreintaTheme.spacing.sm};
`;

export const Place = styled.p`
  width: 100%;
  display: flex;
  font-family: 'Nunito Sans', sans-serif;
  color: ${TreintaTheme.colors.neutrals[700]};
  font-size: ${TreintaTheme.fonts['nunito'].medium.fontSize};
  font-style: ${TreintaTheme.fonts['nunito'].medium.fontStyle};
  font-weight: ${TreintaTheme.fonts['nunito'].medium.fontWeight};
  line-height: ${TreintaTheme.fonts['nunito'].medium.lineHeight};
`;

export const BatchInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: ${TreintaTheme.spacing.md};
  margin-left: ${TreintaTheme.spacing.md};
  margin-right: ${TreintaTheme.spacing.md};
  margin-bottom: ${TreintaTheme.spacing.md};
`;

export const Hour = styled.p`
  color: #2d79f4;
  margin-left: 10px;
  text-decoration: underline;
  font-family: 'Nunito Sans', sans-serif;
  font-size: ${TreintaTheme.fonts['nunito'].small.fontSize};
  font-style: ${TreintaTheme.fonts['nunito'].small.fontStyle};
  font-weight: ${TreintaTheme.fonts['nunito'].small.fontWeight};
  line-height: ${TreintaTheme.fonts['nunito'].small.lineHeight};
`;

export const BatchesEmpty = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  align-content: center;
  justify-content: center;
  background-color: #c0d7fc;
  padding: ${TreintaTheme.spacing.md};
`;

export const BatchesMessage = styled.p`
  margin-left: ${TreintaTheme.spacing.sm};
  font-family: 'Nunito Sans', sans-serif;
  color: ${TreintaTheme.colors.neutrals[700]};
  font-size: ${TreintaTheme.fonts['nunito'].small.fontSize};
  font-style: ${TreintaTheme.fonts['nunito'].small.fontStyle};
  font-weight: ${TreintaTheme.fonts['nunito'].small.fontWeight};
  line-height: ${TreintaTheme.fonts['nunito'].small.lineHeight};
`;
