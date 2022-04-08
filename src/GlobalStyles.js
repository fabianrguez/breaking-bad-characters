import { createGlobalStyle } from 'styled-components';
import { GrapeNutsRegular, PoppinsBold, PoppinsRegular } from 'assets/fonts';

export const GlobalStyles = createGlobalStyle`
  @font-face {
     font-family: 'Grape Nuts';
     src: url(${GrapeNutsRegular}) format('truetype');
  }
  @font-face {
     font-family: 'Poppins';
     src: url(${PoppinsRegular}) format('truetype');
     font-weight: 400;
     font-style: regular;
  }
  @font-face {
     font-family: 'Poppins';
     src: url(${PoppinsBold}) format('truetype');
     font-weight: 600;
     font-style: bold;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before, *::after {
    box-sizing: inherit;
  }

  html, body, #root {
    background: #fafafa;
  }

  html, body, #root, button {
    font-family: 'Poppins', sans-serif;
  }

  ul, ol, li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  blockquote {
    font-family: 'Grape Nuts', cursive;
    font-size: 28px;
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
