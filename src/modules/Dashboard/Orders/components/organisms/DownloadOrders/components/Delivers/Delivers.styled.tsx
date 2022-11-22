import styled from 'styled-components';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';

export const Container = styled.div`
  width: 100%;
  border: 0px solid #003366;
  display: flex;
  margin-top: 20px;
  background: ${TreintaTheme.colors.neutrals};
  border-radius: 10px;
  flex-direction: column;
  //padding: ${TreintaTheme.spacing.lg} ${TreintaTheme.spacing.lg};
`;

export const Table = styled.div`
  width: 95%;
  display: flex;
  background: ${TreintaTheme.colors.neutrals};
  border-radius: 10px;
  flex-direction: column;
  padding: ${TreintaTheme.spacing.lg} ${TreintaTheme.spacing.lg};
  //Sombra
  box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
  -moz-box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
  -webkit-box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
`;

export const Title = styled.p`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-family: 'Nunito Sans', sans-serif;
  color: ${TreintaTheme.colors.neutrals[700]};
  font-size: ${TreintaTheme.fonts['nunito'].mediumbold.fontSize};
  font-style: ${TreintaTheme.fonts['nunito'].mediumbold.fontStyle};
  font-weight: ${TreintaTheme.fonts['nunito'].mediumbold.fontWeight};
  line-height: ${TreintaTheme.fonts['nunito'].mediumbold.lineHeight};
`;
