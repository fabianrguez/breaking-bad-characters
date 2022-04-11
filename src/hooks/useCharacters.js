import { useCharactersContext, usePaginated } from 'hooks';
import { useEffect } from 'react';
import { getPaginatedCharacters } from 'services';

// total characters: 62
export function useCharacters() {
  const { data: context, addCharacters } = useCharactersContext();
  const {
    data: paginatedData,
    error,
    loading,
    loadData,
  } = usePaginated(getPaginatedCharacters, { offset: context.pagination.offset }, false);

  useEffect(() => {
    if (!context?.characters.length > 0) {
      loadData();
    }
  }, []);

  useEffect(() => {
    if (paginatedData) {
      addCharacters(paginatedData);
    }
  }, [paginatedData]);

  return {
    characters: context.characters,
    error,
    loading,
    loadData,
  };
}
