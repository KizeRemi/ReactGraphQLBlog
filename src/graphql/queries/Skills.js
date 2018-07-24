import gql from "graphql-tag";

export const SKILLS_BY_LEVEL = gql`
  query SKILLS_BY_LEVEL ($skill_level: Int!, $withImage: Boolean = true) {
    skillsByLevel (skill_level: $skill_level) {
      id
      title
      resume
      image @include(if: $withImage)
      tag
      level
    }
  }
`;
