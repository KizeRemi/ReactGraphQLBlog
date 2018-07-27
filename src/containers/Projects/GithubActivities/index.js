import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GITHUB_ACTIVITIES } from '../../../graphql/queries/GithubActivities';
import GithubContainer from './GithubContainer';

import './style.css';

class GithubActivities extends Component {

  render() {
    return (
      <Query query={GITHUB_ACTIVITIES}>
        {({ loading, error, data }) => {
          if (error) return `Error! ${error.message}`;

          return <GithubContainer loading={loading} githubActivities={data.githubActivities}/>;
        }}
      </Query>
    );
  }
}

export default GithubActivities;
