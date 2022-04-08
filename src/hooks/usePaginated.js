import { useApiCall } from './useApiCall';

export function usePaginated(callback, params, fetchOnInit = true) {
  const { data, error, loading, refetch } = useApiCall(callback, params, fetchOnInit);

  const loadData = () => {
    refetch(params);
  };

  return {
    data,
    error,
    loading,
    loadData,
  };
}
