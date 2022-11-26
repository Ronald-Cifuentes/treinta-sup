import styled from 'styled-components';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  border-radius: 10px;
  flex-direction: column;
  background: ${TreintaTheme.colors.neutrals};
`;

export const SelectDate = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  background: ${TreintaTheme.colors.neutrals};
`;
