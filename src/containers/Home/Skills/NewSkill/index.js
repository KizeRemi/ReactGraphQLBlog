import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { SKILLS_BY_LEVEL } from '../../../../graphql/queries/Skills';
import { NEW_SKILL } from '../../../../graphql/mutations/Skills';
import NewSkillForm from '../NewSkill/NewSkillForm';

class NewSkill extends Component {

  updateCache = (cache, { data: { newSkill } }) => {
    const { skillsByLevel } = cache.readQuery({ query: SKILLS_BY_LEVEL, variables: { skill_level: 2, withImage: false } });
    skillsByLevel.push(newSkill);

    cache.writeQuery({
      query: SKILLS_BY_LEVEL,
      variables: { skill_level: 2, withImage: false },
      data: { skillsByLevel }
    });
  }

  render() {
    return (
      <Mutation
        mutation={NEW_SKILL} 
        /* refetchQueries={[{ query: SKILLS_BY_LEVEL, variables: { skill_level: 2 } }]} */ 
        update={this.updateCache} 
      >
        {(newSkill, { data }) => {
          return (
            <NewSkillForm
              icon="fas fa-palette"
              onSubmit={({ title }) => newSkill({ variables: { input: { title } } })}
            />
          );
        }}
      </Mutation>
    );
  }
}

export default NewSkill;
