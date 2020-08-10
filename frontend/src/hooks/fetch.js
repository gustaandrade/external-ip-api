import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState();
  const [url, setUrl] = useState('https://api.ipify.org');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(url).then(res => res.text());
        setData(response);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useFetch;
