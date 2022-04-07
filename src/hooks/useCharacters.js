import { getCharacters } from 'services/getCharacters';
import { useApiCall } from './useApiCall';

export function useCharacters() {
  const { data: characters, error, loading } = useApiCall(getCharacters);

  return {
    characters,
    error,
    loading,
  };
}
