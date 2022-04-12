import { getCharacterQuote } from 'services';
import { getCharacterName } from 'utils';
import { useApiCall } from './useApiCall';

export function useCharacterQuote(character) {
  const { data: quote, refetch, loading } = useApiCall(getCharacterQuote, getCharacterName(character ?? ''));

  const getNewQuote = () => refetch(getCharacterName(character));

  return { quote: quote?.[0]?.quote ?? '', getNewQuote, loading };
}
