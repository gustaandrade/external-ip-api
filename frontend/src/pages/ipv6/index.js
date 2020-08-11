import React, { useEffect } from 'react';

import useFetch from '../../hooks/fetch';

const Ipv6 = () => {
  const [{ data, isLoading, isError }, setIpv6] = useFetch();
  useEffect(() => {
    setIpv6(true);
  }, [setIpv6]);

  return !isLoading && !isError && <pre>{data}</pre>;
};

export default Ipv6;
