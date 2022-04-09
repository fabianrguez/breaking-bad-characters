import { getCharacterQuote } from 'services';
import { useApiCall } from './useApiCall';

const getCharacterName = (name) => name.split(' ').join('+');

export function useCharacterQuote(character) {
  const { data: quote, refetch, loading } = useApiCall(getCharacterQuote, getCharacterName(character ?? ''));

  const getNewQuote = () => refetch(getCharacterName(character));

  return { quote: quote?.[0]?.quote ?? '', getNewQuote, loading };
}
