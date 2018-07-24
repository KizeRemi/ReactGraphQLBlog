import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_DEFAULT_COLOR } from '../graphql/queries/App';

class ColoredTitle extends Component {

  render() {
    const { element: Element, text } = this.props;
    return (
      <Query query={GET_DEFAULT_COLOR}>
        {({ data: { App: { defaultColor } } }) => {
          return <Element style={{ color: defaultColor }} >{text}</Element>;
        }}
      </Query>
    )
  }
}

export default ColoredTitle;
