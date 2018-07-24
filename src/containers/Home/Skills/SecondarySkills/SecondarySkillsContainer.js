import React, { Component } from 'react';
import SecondarySkill from './SecondarySkill';
import NewSkill from '../NewSkill';

class SecondarySkillsContainer extends Component {

  render() {
    const { skills, loading } = this.props;
    return (
      <section className="skills-secondary-container">
        {loading ? 
          <i className="fa fa-spinner fa-spin" />
        : (
          <div className="skills-secondary-list">
            {skills.map(skill => (
              <SecondarySkill key={skill.id} skill={skill} />
            ))}
          </div>
        )}
        <NewSkill />
      </section>
    );
  }
}

export default SecondarySkillsContainer;
