import React, { Component } from 'react';

class GithubCommitActivity extends Component {

  render() {
    const { name, commit, message } = this.props;
    return (
      <p>
        <i className="fas fa-code-branch" aria-hidden="true" />
        <a href={`https://github.com/${name}/commit/${commit}`} target="_blank">
          <span className="commit-id">#{commit}:</span>
        </a>
        <span className="commit-message">{message}</span>
      </p>
    );
  }
}

export default GithubCommitActivity;
