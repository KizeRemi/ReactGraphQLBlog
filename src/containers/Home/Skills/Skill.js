import React, { PureComponent } from 'react';
import ColoredTitle from '../../../components/ColoredTitle'

export class Skill extends PureComponent {

  render() {
    const { skill } = this.props;
    return (
      <div className="skill-item">
        <img alt={`Logo ${skill.tag}`} src={skill.image} />
        <ColoredTitle element="h3" text={skill.title} />
        <p>{skill.resume}</p>
      </div>
    );
  }
}

export default Skill;
