import { createContext, useReducer } from 'react';
import { charactersInitialState, charactersReducer } from './reducer';

const CharactersContext = createContext();

const CharactersContextProvider = ({ reducer, initialState, children }) => (
  <CharactersContext.Provider value={useReducer(reducer, initialState)}>{children}</CharactersContext.Provider>
);

export { CharactersContextProvider, CharactersContext, charactersInitialState, charactersReducer };
