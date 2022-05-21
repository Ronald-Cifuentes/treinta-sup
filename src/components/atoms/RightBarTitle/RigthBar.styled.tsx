import styled from 'styled-components';

import {TreintaTheme} from '@30sas/web-ui-kit-theme';

export const HeaderLine = styled.div`
  margin-top: ${TreintaTheme.utils.spacing(4)};
  width: 100%;
`;
export const HeaderContainer = styled.div`
  margin-top: 10px;
  margin-right: 24px;
  margin-left: 48px;
  display: flex;
  width: 100%;
`;

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  margin-top: 8px;
  margin-left: 10px;
`;

export const BackIconContainer = styled.div`
  margin-top: 8px;
`;
export const SubmitContainer = styled.div`
  margin-top: ${TreintaTheme.utils.spacing(4)};
  background-color: ${TreintaTheme.colors.neutrals[100]};
`;
