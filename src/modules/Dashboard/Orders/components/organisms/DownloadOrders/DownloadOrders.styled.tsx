import styled from 'styled-components';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';

export const Container = styled.div`
  width: 100%;
  height: 110%;
  background: ${TreintaTheme.colors.neutrals};
`;

export const Header = styled.div`
  border-bottom: 1px solid #ced2d7;
  background: ${TreintaTheme.colors.neutrals};
  padding: ${TreintaTheme.spacing.lg} ${TreintaTheme.spacing.xs}
    ${TreintaTheme.spacing.xs} ${TreintaTheme.spacing.lg};
`;

export const Content = styled.div`
  background: ${TreintaTheme.colors.neutrals};
  padding: ${TreintaTheme.spacing.lg} ${TreintaTheme.spacing.xs}
    ${TreintaTheme.spacing.xs} ${TreintaTheme.spacing.lg};
`;

export const Title = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  font-family: 'Nunito Sans', sans-serif;
  color: ${TreintaTheme.colors.neutrals[700]};
  font-size: ${TreintaTheme.fonts['nunito'].xxlargebold.fontSize};
  font-style: ${TreintaTheme.fonts['nunito'].mediumbold.fontStyle};
  font-weight: ${TreintaTheme.fonts['nunito'].xxlargebold.fontWeight};
  line-height: ${TreintaTheme.fonts['nunito'].xxlargebold.lineHeight};
`;
