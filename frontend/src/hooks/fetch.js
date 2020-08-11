import { useState, useEffect } from 'react';

import { sitesIpv4, sitesIpv6 } from '../data/sites';

const useFetch = () => {
  const [data, setData] = useState();
  const [url, setUrl] = useState(sitesIpv4[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        await Promise.all(
          sitesIpv4.map(async s => {
            const response = await fetch(s).then(res => res.text());
            setData(response);
          })
        );
      } catch (error) {
        console.log(error);
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
};

export default useFetch;
