import {createGlobalStyle} from 'styled-components';

export const MainGlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #FF9B50;
  }

  * {
    box-sizing: border-box;
    user-select: none;
    font-family: 'Titillium Web', sans-serif;
  }
`;
