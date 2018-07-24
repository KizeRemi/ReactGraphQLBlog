import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CHANGE_DEFAULT_COLOR } from '../../../../graphql/mutations/App';
import ChangeColorForm from './ChangeColorForm';

export class ChangeColorContainer extends Component {

  render() {
    return (
      <Mutation mutation={CHANGE_DEFAULT_COLOR}>
        {(changeDefaultColor, { data }) => {
          return (
            <ChangeColorForm onSubmit={(defaultColor) => changeDefaultColor({ variables: { defaultColor } })} />
          );
        }}
      </Mutation>
    );
  }
}

export default ChangeColorContainer;
