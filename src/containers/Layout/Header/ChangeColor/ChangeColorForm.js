import React, { Component } from 'react';
import SubmitButton from '../../../../components/SubmitButton';

export class ChangeColorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { defaultColor : '' };
  }

  onChange = (event) => {
    this.setState({ defaultColor: event.target.value });
  }

  save = () => {
    this.props.onSubmit(this.state.defaultColor);
  }

  render() {
    const { defaultColor } = this.state;
    return (
      <form className="change-color-container" >
        <input
          type="text"
          value={defaultColor}
          onChange={this.onChange}
          placeholder="Ex: #FAFAFA..."
        />
        <SubmitButton icon="fas fa-palette" onClick={this.save} />
      </form>
    );
  }
}

export default ChangeColorContainer;
