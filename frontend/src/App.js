import React from 'react';

import useFetch from './hooks/fetch';

function App() {
  const [{ data, isLoading, isError }] = useFetch();

  return !isLoading && !isError && <pre>{data}</pre>;
}

export default App;
