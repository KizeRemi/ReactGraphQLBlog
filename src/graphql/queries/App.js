import gql from "graphql-tag";

export const GET_DEFAULT_COLOR = gql`
  query GET_DEFAULT_COLOR {
    App @client {
      defaultColor
    }
  }
`;
