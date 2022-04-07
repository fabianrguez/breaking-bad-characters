import React from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import i18n from './i18n';
import './index.css';
import { CharactersContextProvider, charactersInitialState, charactersReducer } from 'context/CharactersContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
    <CharactersContextProvider initialState={charactersInitialState} reducer={charactersReducer}>
      <App />
    </CharactersContextProvider>
  </I18nextProvider>
);
