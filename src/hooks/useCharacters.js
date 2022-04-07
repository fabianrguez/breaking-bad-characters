import { getCharacters } from 'services/getCharacters';
import { useCharactersContext, usePaginated } from 'hooks';
import { useEffect } from 'react';

// total characters: 62
export function useCharacters() {
  const { data: context, addCharacters } = useCharactersContext();
  const {
    data: paginatedData,
    error,
    loading,
    loadMore,
  } = usePaginated(getCharacters, { offset: context.pagination.offset });

  useEffect(() => {
    if (paginatedData) {
      addCharacters(paginatedData);
    }
  }, [paginatedData]);

  return {
    characters: context.characters,
    error,
    loading,
    loadMore,
  };
}
