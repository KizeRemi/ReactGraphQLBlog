import React, { Component, Fragment } from 'react';
import Skills from './Skills'
import Map from './Map';

export class Home extends Component {
  render() {
    return (
      <Fragment>
        <Skills />
        <Map />
      </Fragment>
    );
  }
}

export default Home;
