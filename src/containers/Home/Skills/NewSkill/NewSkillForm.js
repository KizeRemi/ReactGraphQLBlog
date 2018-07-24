import React, { Component } from 'react';
import SubmitButton from '../../../../components/SubmitButton';

class NewSkillForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title : '' };
  }

  onChange = (event) => {
    this.setState({ title: event.target.value });
  }

  save = () => {
    this.props.onSubmit(this.state);
  }

  render() {
    const { title } = this.state;
    return (
      <form className="new-skill-container">
        <input
          type="text"
          value={title}
          onChange={this.onChange}
          placeholder="Ex: Symfony..."
        />

        <SubmitButton
          icon="fas fa-plus-square"
          onClick={this.save}
        />
      </form>
    );
  }
}

export default NewSkillForm;
