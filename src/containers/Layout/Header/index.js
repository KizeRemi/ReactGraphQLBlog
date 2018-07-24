import React, { Component } from 'react';
import ColoredTitle from '../../../components/ColoredTitle'
import ChangeColor from './ChangeColor';

export class Header extends Component {
  render() {
    return (
      <header>
        <ColoredTitle element="h1" text="Présentation GraphQL" />
        <ChangeColor />
      </header>
    );
  }
}

export default Header;
