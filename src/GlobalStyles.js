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

  html, body, #root, .app {
    background: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.white};
    min-height: 100vh;
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
    font-weight: bold;
    padding: 1.5rem 0;

    &::after, &::before {
      content: '"';
      color: ${({theme}) => theme.colors.purple}
    }
  }

  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
`;
