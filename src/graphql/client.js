import ApolloClient from 'apollo-boost';

import resolvers from './resolvers';
import defaults from './defaults';
import typeDefs from './typeDefs';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000',
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
});

export default client;
