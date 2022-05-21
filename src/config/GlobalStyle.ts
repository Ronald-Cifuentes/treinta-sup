import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Nunito Sans', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    height: 100vh;
  }

  #root {
    height: 100%;
  }

  iframe {
    display: none;
  }

  ul {
    list-style: none;
    margin: 0;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
    margin: auto auto;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${TreintaTheme.colors.neutrals[100]};
    &-thumb {
        background-color: ${TreintaTheme.colors.gray[500]};
        border-radius: 4px;
    }
  }
  *::-webkit-scrollbar-track {
    box-shadow: 'inset 0 0 6px rgba(0,0,0,0.00)';
    -webkit-box-shadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${TreintaTheme.colors.gray[500]};
    border-radius: 4px;
  }
`;
