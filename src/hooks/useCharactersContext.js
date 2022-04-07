import { CharactersContext } from 'context/CharactersContext';
import { ADD_CHARACTERS } from 'context/CharactersContext/actionType';
import { useContextValue } from './useContextValue';

export function useCharactersContext() {
  const [data, dispatch] = useContextValue(CharactersContext);

  const addCharacters = (data) => dispatch({ type: ADD_CHARACTERS, payload: data });

  return { data, addCharacters };
}
