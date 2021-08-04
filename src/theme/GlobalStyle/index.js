/* eslint-disable linebreak-style */
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }
  /* Full height layout */
  html, body {
    display: flex;
    min-height: max-content;
    width: 100%;
  }
  html{
    background-color:  ${({ theme }) => theme.colors.background.primary.color};
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding:1%;
  }
`;

export default GlobalStyle;
