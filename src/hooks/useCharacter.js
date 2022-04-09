import { useEffect, useState } from 'react';
import { getCharacter } from 'services';
import { useApiCall } from './useApiCall';

export function useCharacter(id) {
  const [characterError, setCharacterError] = useState(false);
  const { data: character, loading, error } = useApiCall(getCharacter, { id });

  useEffect(() => {
    if (character && character?.length === 0 || error) {
      setCharacterError(true);
    }
  }, [character, error]);

  return {
    character: character?.[0],
    loading,
    error: characterError,
  };
}
