import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const imgUrl = require("../../../public/images/fundo.jpg").default;

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
    min-height: 100vh;
    width: 100%;
  }
  html{
    background-color: #090909;
/*     background-image: url(${imgUrl});
    background-repeat: no-repeat; */
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