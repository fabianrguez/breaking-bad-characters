import { useEffect, useState } from 'react';

export function useApiCall(callback, params = {}) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = (customParams = params, { isRefetching = false } = {}) => {
    !isRefetching && setLoading(true);
    callback(customParams)
      .then((_data) => {
        setData(_data);
        setLoading(false);
      })
      .catch((err) => {
        !isRefetching && setLoading(false);
        setError(err);
      });
  };

  const refetch = (params = {}) => {
    console.log({ params });
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
