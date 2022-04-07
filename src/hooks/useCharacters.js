import { getCharacters } from 'services/getCharacters';
import { useCharactersContext, usePaginated } from 'hooks';
import { useEffect } from 'react';

let offset = 0;

// total characters: 62
export function useCharacters() {
  const { data: context, addCharacters } = useCharactersContext();
  const { data: paginatedData, error, loading, loadMore } = usePaginated(getCharacters, { offset });

  useEffect(() => {
    if (paginatedData) {
      addCharacters(paginatedData);
      offset += 10;
      console.log('offset updated', offset);
    }
  }, [paginatedData]);

  return {
    characters: context.characters,
    error,
    loading,
    loadMore,
  };
}
