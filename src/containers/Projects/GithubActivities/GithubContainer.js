import React, { Component } from 'react';
import GithubActivityList from './GithubActivityList';

class GithubContainer extends Component {

  render() {
    const { loading, githubActivities } = this.props;
    return (
      <div class="bloc-github">
        <h3 class="github-title">Activités sur Github!</h3>
        {loading ? (
          <i className="fa fa-spinner fa-spin" />
        ) : (
          <GithubActivityList githubActivities={githubActivities} />
        )}
      </div>
    );
  }
}

export default GithubContainer;
