import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    font-size: 32px;
    padding: 1.5rem 0;

    &::after, &::before {
      content: '"'
    }
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
