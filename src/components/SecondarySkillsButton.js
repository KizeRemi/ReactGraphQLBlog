import React, { Component } from 'react';

class SecondarySkillsButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  toggleDisplay = () => {
    const { isClicked } = this.state;
    this.setState({ isClicked: !isClicked });
    this.props.onClick(isClicked);
  }

  render() {
    return (
    <button className="hide-btn" type="button" onClick={this.toggleDisplay}>
      {!this.state.isClicked ? <i className="fas fa-angle-double-down" /> : <i className="fas fa-angle-double-up" />}
    </button>
    )
  }
}

export default SecondarySkillsButton;
