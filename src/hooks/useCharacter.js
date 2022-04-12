import { useEffect, useState } from 'react';
import { getCharacter, getCharacterDeaths } from 'services';
import { getCharacterName } from 'utils';
import { useApiCall } from './useApiCall';

export function useCharacter(id) {
  const [characterError, setCharacterError] = useState(false);
  const { data: character, loading: characterLoading, error } = useApiCall(getCharacter, { id });
  const { data: deaths, refetch: fetchDeaths } = useApiCall(getCharacterDeaths, null, false);

  useEffect(() => {
    if ((character && character?.length === 0) || error) {
      setCharacterError(true);
    } else if (character) {
      fetchDeaths(getCharacterName(character?.[0].name));
    }
  }, [character, error]);

  return {
    character: { ...character?.[0], deaths: { ...deaths?.[0] } },
    loading: characterLoading,
    error: characterError,
  };
}
