import React, { PureComponent } from 'react';

import './style.css';
import Line from '../../../../assets/images/Line.svg';
import skillGroupe from '../../../../assets/images/skillgroupe.png';

class Intro extends PureComponent {

  render() {
    return (
      <div className="container-intro">
        <div className="container-resume">
          <div className="container-resume-content">
            <span className="intro-name">Mavillaz Rémi</span>
            <h1 className="intro-title">Développeur Web</h1>
            <p className="intro-content line">Bienvenue dans mon monde !</p>
            <p className="intro-content">
              Je suis actuellement développeur Symfony - GraphQL - React et Astronaute chez Eleven Labs, sur Paris (16).
              Travaille uniquement en mode Agile, et je m'intéresse de très près à NodeJS ainsi que le langage Go !
            </p>
          </div>
          <div className="container-resume-content">
            <img style={{ width: '500px' }} src={skillGroupe} />
          </div>
        </div>
      </div>
    )
  }
}

export default Intro;
