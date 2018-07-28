import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './style.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isMenuFixed: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isMenuFixed !== this.state.isMenuFixed;
  }

  handleScroll = (event) => {
    this.setState({ isMenuFixed : event.pageY > 400 });
  }

  render() {
    const { isMenuFixed } = this.state;
    return (
      <header className={isMenuFixed ? 'header-fixed' : 'header-unfixed'}>
        <div className="container-nav">
          <nav>
            <ul className="nav-root">
              <li className="nav-section logo">
                <Link to="/" activeClassName="active">
                  <button type="button">mavillaz remi</button>
                </Link>
              </li>
              <li className="nav-section">
                <Link to="/articles" activeClassName="active">
                  <button type="button">Articles</button>
                </Link>
              </li>
              <li className="nav-section">
                <Link to="/projets" activeClassName="active">
                  <button type="button">Projets</button>
                </Link>
              </li>
              <li className="nav-section">
                <a href="https://github.com/KizeRemi">
                  <button type="button">Github</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default NavBar;
