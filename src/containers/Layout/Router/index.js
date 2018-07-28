import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Home';
import NotFound from '../../NotFound';
import Projects from '../../Projects';

export class Router extends Component {

  render() {
    return (
      <main data-region="content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/projets" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Router;
