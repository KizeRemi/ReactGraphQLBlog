import React, { Component, Fragment } from 'react';
import NavBar from './NavBar';
import Intro from './Intro';
import ChangeColor from './ChangeColor';

export class Header extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Intro />
        <ChangeColor />
      </Fragment>
    );
  }
}

export default Header;
