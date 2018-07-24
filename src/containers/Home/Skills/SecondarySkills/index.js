import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { SKILLS_BY_LEVEL } from '../../../../graphql/queries/Skills';
import SecondarySkillsContainer from './SecondarySkillsContainer';

class SecondarySkills extends Component {
  render() {
    return (
      <Query query={SKILLS_BY_LEVEL} variables={{ skill_level: 2, withImage: false }}>
        {({ loading, error, data }) => {
          if (error) return `Error! ${error.message}`;
          return <SecondarySkillsContainer loading={loading} skills={data.skillsByLevel} />;
        }}
      </Query>
    );
  }
}

export default SecondarySkills;
