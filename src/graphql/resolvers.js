const resolvers = {
  Mutation: {
    changeDefaultColor: (_, { defaultColor }, { cache }) => {
      cache.writeData({
        data: { App: { __typename: 'App', defaultColor } }
      });
      return null;
    }
  }
};

export default resolvers;
