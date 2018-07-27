import React, { Component } from 'react';
import BranchActivity from './BranchActivity';

class GithubActivityItem extends Component {

  render() {
    const { githubActivity } = this.props;
    console.log(githubActivity)
    return (
      <div className="github-item">
        <img src={githubActivity.avatarUrl} alt="Avatar github" />
        <BranchActivity name={githubActivity.name} branch={githubActivity.ref} />
        {githubActivity.type === 'PushEvent' && 
          <div>Push event</div>
        }
      </div>
    );
  }
}

export default GithubActivityItem;
