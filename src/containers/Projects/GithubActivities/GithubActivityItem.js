import React, { Component, Fragment } from 'react';
import BranchActivity from './BranchActivity';
import CommitActivity from './CommitActivity';

class GithubActivityItem extends Component {

  getTypeLabel = () => {
    const { type, pullRequestAction } = this.props.githubActivity;

    if (type === 'CreateEvent') {
      return 'Create new branch';
    } else if (type === 'PushEvent') {
      return 'Pushed to';
    } else {
      if(pullRequestAction === 'opened') {
        return 'Opened a pull request';
      } else {
        return 'Merge branch';
      }
    }
  }
  render() {
    const { githubActivity } = this.props;
    console.log(githubActivity)
    return (
      <div className="github-item">
        <img src={githubActivity.avatarUrl} alt="Avatar github" />
        {githubActivity.type === 'CreateEvent' &&  !githubActivity.ref ? (
          <div>New Repo</div>
        ) : (
          <Fragment>
            <span>{this.getTypeLabel()}</span>
            <BranchActivity name={githubActivity.name} branch={githubActivity.ref} />
            {githubActivity.type === 'PushEvent' && (
              <CommitActivity
                commit={githubActivity.commit}
                name={githubActivity.name}
                message={githubActivity.message}
              />
            )}
          </Fragment>
        )}
      </div>
    );
  }
}

export default GithubActivityItem;
