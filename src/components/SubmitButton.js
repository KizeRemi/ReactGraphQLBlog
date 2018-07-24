import React, { Component } from 'react';

class SubmitButton extends Component {
  render() {
    const { onClick, icon } = this.props;
    return (
      <button className="switch-color-btn" type="button" onClick={onClick}>
        <i className={icon} />
      </button>
    )
  }
}

export default SubmitButton;
