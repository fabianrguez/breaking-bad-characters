import { useEffect, useState } from 'react';

export function useApiCall(callback) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    callback().then((_data) => {
      setData(_data);
      setLoading(false);
    }).catch(err => setError(err));
  }, []);

  return {
    data,
    error,
    loading,
  };
}
