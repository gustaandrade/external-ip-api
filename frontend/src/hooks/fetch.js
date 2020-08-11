import { useState, useEffect } from 'react';

import { sitesIpv4, sitesIpv6 } from '../data/sites';

const useFetch = () => {
  const [data, setData] = useState();
  const [isIpv6, setIsIpv6] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sites = !isIpv6 ? sitesIpv4 : sitesIpv6;

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        for (const s of sites) {
          const response = await fetch(s).then(res => res.text());
          if (typeof response !== 'undefined' && response !== null) {
            setData(response);
            break;
          }
        }
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [isIpv6, sites]);

  return [{ data, isLoading, isError }, setIsIpv6];
};

export default useFetch;
