import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './AppRoute';
import Home from '~/pages/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
