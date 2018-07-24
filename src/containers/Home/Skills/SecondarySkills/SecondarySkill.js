import React, { PureComponent } from 'react';
import ColoredTitle from '../../../../components/ColoredTitle'

export class SecondarySkill extends PureComponent {

  render() {
    const { skill } = this.props;
    return (
      <div className="skill-secondary-item">
        <ColoredTitle element="h3" text={skill.title} />
        <p>{skill.resume}</p>
      </div>
    );
  }
}

export default SecondarySkill;
