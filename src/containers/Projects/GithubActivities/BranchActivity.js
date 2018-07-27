import React, { Component, Fragment } from 'react';

class GithubBranchActivity extends Component {

  render() {
    const { name, branch } = this.props;
    const branchName = branch ? branch : 'master';
    return (
      <Fragment>
        <a href={`https://github.com/${name}/tree/${branch}`} target="_blank">
          {branchName}
        </a> on
        <a href={`https://github.com/${name}`} >{name}</a>
      </Fragment>
    );
  }
}

export default GithubBranchActivity;
