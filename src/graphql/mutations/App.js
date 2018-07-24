import gql from "graphql-tag";

export const CHANGE_DEFAULT_COLOR = gql`
  mutation CHANGE_DEFAULT_COLOR ($defaultColor: String!) {
    changeDefaultColor (defaultColor: $defaultColor) @client
  }
`;
