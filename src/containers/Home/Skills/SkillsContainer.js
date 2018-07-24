import React, { Component } from 'react';
import Skill from './Skill';
import SecondarySkills from './SecondarySkills'
import SecondarySkillsButton from '../../../components/SecondarySkillsButton';
import ColoredTitle from '../../../components/ColoredTitle'

class SkillsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
  }

  toggleDisplay = () => {
    this.setState({ display: !this.state.display });
  }

  render() {
    const { skills, loading } = this.props;
    const { display } = this.state;

    return (
      <section className="skills-container">
        <ColoredTitle element="h2" text="Mes compétences" />
        {loading ? 
          <i className="fa fa-spinner fa-spin" />
        : (
          <div className="skills-list">
            {skills.map(skill => (
              <Skill key={skill.id} skill={skill} />
            ))}
          </div>
        )}
        <SecondarySkillsButton onClick={this.toggleDisplay} />
        {display && <SecondarySkills />}
      </section>
    );
  }
}

export default SkillsContainer;
