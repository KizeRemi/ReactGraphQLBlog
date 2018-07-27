import React, { Component, Fragment } from 'react';

class NewRepoActivity extends Component {

  render() {
    const { name } = this.props;
    return (
      <div className="github-new-repo">
        Create new repo
        <a href={`https://github.com/${name}`} target="_blank">{name}</a>
      </div>
    );
  }
}

export default NewRepoActivity;
