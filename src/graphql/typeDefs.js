const typeDefs = `
type App {
  defaultColor: String!
}

type Mutation {
  changeDefaultColor(defaultColor: String!): App
}

type Query {
  App: App
}
`;

export default typeDefs;
