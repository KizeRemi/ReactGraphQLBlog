import React, { Component, Fragment } from 'react';

class GithubBranchActivity extends Component {

  render() {
    const { name, branch } = this.props;
    return (
      <Fragment>
        <a href={`https://github.com/${name}/tree/${branch}`} target="_blank">
          {branch}
        </a> on
        <a href={`https://github.com/${name}`} >{name}</a>
      </Fragment>
    );
  }
}

export default GithubBranchActivity;
