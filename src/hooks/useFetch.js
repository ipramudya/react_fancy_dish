import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error('could not fetch the data for that resource');
        }

        return response.json();
      })
      .then((responseJson) => {
        setData(responseJson);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return { data, isPending, error };
};

export default useFetch;
