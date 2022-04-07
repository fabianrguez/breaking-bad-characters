import { useApiCall } from './useApiCall';

export function usePaginated(callback, params = {}) {
  const { data, error, loading, refetch } = useApiCall(callback);

  const loadMore = () => {
    refetch(params);
  };

  return {
    data,
    error,
    loading,
    loadMore
  };
}
