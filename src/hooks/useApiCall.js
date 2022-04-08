import { useEffect, useState } from 'react';

export function useApiCall(callback, apiCallParams = {}, fetchOnInit = true) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(fetchOnInit);
  const [error, setError] = useState();

  const fetchData = (customParams = apiCallParams) => {
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
    fetchData(params);
  };

  useEffect(() => {
    fetchOnInit && fetchData();
  }, []);

  return {
    data,
    error,
    loading,
    refetch,
  };
}
