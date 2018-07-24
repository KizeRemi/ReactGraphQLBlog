import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { SKILLS_BY_LEVEL } from '../../../graphql/queries/Skills';
import SkillsContainer from './SkillsContainer';

class Skills extends Component {

  render() {
    return (
      <Query query={SKILLS_BY_LEVEL} variables={{ skill_level: 1 }}>
        {({ loading, error, data }) => {
          if (error) return `Error! ${error.message}`;
          return <SkillsContainer loading={loading} skills={data.skillsByLevel} />;
        }}
      </Query>
    );
  }
}

export default Skills;
