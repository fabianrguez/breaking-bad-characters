import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18n';
import { CharactersContextProvider, charactersInitialState, charactersReducer } from 'context/CharactersContext';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'theme';

const root = createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <CharactersContextProvider initialState={charactersInitialState} reducer={charactersReducer}>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </CharactersContextProvider>
  </I18nextProvider>
);
