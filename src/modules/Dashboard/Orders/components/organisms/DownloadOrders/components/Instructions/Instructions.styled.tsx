import styled from 'styled-components';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';

export const Container = styled.div`
  width: 95%;
  display: flex;
  background: ${TreintaTheme.colors.neutrals};
  border-radius: 10px;
  flex-direction: row;
  padding: ${TreintaTheme.spacing.lg} ${TreintaTheme.spacing.lg};
  //Sombra
  box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
  -moz-box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
  -webkit-box-shadow: -2px 3px 20px 0px rgba(0, 0, 0, 0.125);
`;

export const ImageContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  background: ${TreintaTheme.colors.neutrals};
`;

export const GreenContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  background: #ebfaf1;
  border-radius: 20px;
  justify-content: center;
`;

export const TextContainer = styled.div`
  width: 70%;
  background: ${TreintaTheme.colors.neutrals};
`;

export const InstructionTitle = styled.p`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
  color: ${TreintaTheme.colors.neutrals[700]};
  font-size: ${TreintaTheme.fonts['nunito'].mediumbold.fontSize};
  font-style: ${TreintaTheme.fonts['nunito'].mediumbold.fontStyle};
  font-weight: ${TreintaTheme.fonts['nunito'].mediumbold.fontWeight};
  line-height: ${TreintaTheme.fonts['nunito'].mediumbold.lineHeight};
`;

export const InstructionAction = styled.p`
  display: flex;
  margin-left: 25px;
  font-family: 'Nunito Sans', sans-serif;
  color: ${TreintaTheme.colors.neutrals[700]};
  font-size: ${TreintaTheme.fonts['nunito'].small.fontSize};
  font-style: ${TreintaTheme.fonts['nunito'].small.fontStyle};
  font-weight: ${TreintaTheme.fonts['nunito'].small.fontWeight};
  line-height: ${TreintaTheme.fonts['nunito'].small.lineHeight};
`;

export const GuideContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: ${TreintaTheme.colors.neutrals};
`;

export const GuideText = styled.p`
  color: #2d79f4;
  margin-left: 10px;
  text-decoration: underline;
  font-family: 'Nunito Sans', sans-serif;
  font-size: ${TreintaTheme.fonts['nunito'].small.fontSize};
  font-style: ${TreintaTheme.fonts['nunito'].small.fontStyle};
  font-weight: ${TreintaTheme.fonts['nunito'].small.fontWeight};
  line-height: ${TreintaTheme.fonts['nunito'].small.lineHeight};
`;
