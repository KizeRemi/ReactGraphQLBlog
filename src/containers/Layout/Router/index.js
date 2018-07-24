import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Home';
import NotFound from '../../NotFound';

export class Router extends Component {

  render() {
    return (
      <main data-region="content">
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Router;
