import styled from 'styled-components';

import {FontsName, Variants} from '@30sas/web-ui-kit-theme';

export const List = styled.ol`
  padding: 0 0 0 ${({theme}) => theme.utils.spacing(4)};
  & li {
    ${({theme}) => ({...theme.fonts[FontsName.Nunito][Variants['Medium']]})};
    margin-left: ${({theme}) => theme.utils.spacing(2)};
  }
  & li::marker {
    color: ${({theme}) => theme.colors.primary[700]};
    font-weight: bold;
  }
  li:before {
    content: '';
    padding-left: ${({theme}) => theme.utils.spacing(2)};
  }
`;

export const YoutubeVideo = styled.iframe`
  display: block;
`;
