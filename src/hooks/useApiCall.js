import { useEffect, useState } from 'react';

export function useApiCall(callback, params = {}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = (customParams = params, { isRefetching = false } = {}) => {
    setLoading(true);
    callback(customParams)
      .then((_data) => {
        setData(_data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  const refetch = (params = {}) => {
    fetchData(params, { isRefetching: true });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
    refetch,
  };
}
