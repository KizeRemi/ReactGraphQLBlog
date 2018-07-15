import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { GET_SKILLS } from '../../graphql/Skills';

export class Home extends Component {

  render() {
    return (
      <Query query={GET_SKILLS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <ul>
              {data.Skills.map(skill => (
                <li>{skill.name}</li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default Home;
