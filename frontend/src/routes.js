import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Ipv4 from './pages/ipv4';
import Ipv6 from './pages/ipv6';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Ipv4} />
        <Route path='/ipv4' component={Ipv4} />
        <Route path='/ipv6' component={Ipv6} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
