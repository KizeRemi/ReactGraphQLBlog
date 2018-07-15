import React, { PureComponent } from 'react';
import Header from './Header';
import Router from './Router';

export class Layout extends PureComponent {

  render() {
    return (
      <section className="main-container" data-region="main">
        <Header />
        <Router />
      </section>
    );
  }
}

export default Layout;
