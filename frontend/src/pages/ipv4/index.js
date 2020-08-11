import React from 'react';

import useFetch from '../../hooks/fetch';

const Ipv4 = () => {
  const [{ data, isLoading, isError }] = useFetch();

  return !isLoading && !isError && <pre>{data}</pre>;
};

export default Ipv4;
