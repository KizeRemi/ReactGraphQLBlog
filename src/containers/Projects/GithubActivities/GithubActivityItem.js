import React, { Component, Fragment } from 'react';
import BranchActivity from './BranchActivity';
import CommitActivity from './CommitActivity';
import NewRepoActivity from './NewRepoActivity';

import { getActionFromType } from './helpers';

class GithubActivityItem extends Component {
  constructor(props) {
    super(props);
    this.state = { action: '' };
  }

  componentDidMount() {
    const { type, pullRequestAction } = this.props.githubActivity;
    this.setState({ action: getActionFromType(type, pullRequestAction) });
  }

  render() {
    const { githubActivity } = this.props;
    return (
      <div className="github-item">
        <img src={githubActivity.avatarUrl} alt="Avatar github" />
        {githubActivity.type === 'CreateEvent' &&  !githubActivity.ref ? (
          <NewRepoActivity name={githubActivity.name} />
        ) : (
          <Fragment>
            <span>{this.state.action}</span>
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
