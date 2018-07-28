import React, { PureComponent } from 'react';

import './style.css';

class Intro extends PureComponent {

  render() {
    return (
      <div className="container-intro">
        <div className="container-resume">
          <div className="container-resume-content">
            <span className="intro-name">Mavillaz Rémi</span>
            <h1 className="intro-title">Développeur Web</h1>
            <p className="intro-content line">Bienvenue dans mon monde !</p>
            <p className="intro-content">Actuellement développeur Symfony - GraphQL - React chez Eleven Labs</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
