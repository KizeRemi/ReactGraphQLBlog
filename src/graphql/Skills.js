import gql from "graphql-tag";

export const GET_SKILLS = gql`
{
  Skills {
    id
    name
    resume
    image
  }
}
`;
