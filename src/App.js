import React, { Component } from 'react';
import './App.css';
import { client } from './graphql/client';
import { ApolloProvider } from 'react-apollo';
import Layout from './containers/Layout';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
