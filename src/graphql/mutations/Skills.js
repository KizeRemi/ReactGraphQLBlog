import gql from "graphql-tag";

export const NEW_SKILL = gql`
  mutation NEW_SKILL($input: SkillInput!) {
    newSkill(input: $input) {
      id
      title
      resume
      tag
      level
    }
  }
`;
