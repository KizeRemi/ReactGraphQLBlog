import React, { Component } from 'react';
import GithubActivityItem from './GithubActivityItem';

class GithubActivityList extends Component {

  render() {
    const { githubActivities } = this.props;
    return (
      <div className="github-activities-list">
        {githubActivities.map((githubActivity, index) => (
          <GithubActivityItem
            key={index}
            githubActivity={githubActivity}
          />
        ))}
      </div>
    );
  }
}

export default GithubActivityList;
