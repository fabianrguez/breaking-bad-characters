import { getCharacter } from 'services';
import { useApiCall } from './useApiCall';

export function useCharacter(id) {
  const { data: character, loading, error } = useApiCall(getCharacter, { id });

  return {
    character: character?.[0],
    loading,
    error,
  };
}
