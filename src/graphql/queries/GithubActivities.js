import gql from "graphql-tag";

export const GITHUB_ACTIVITIES = gql`
  query GITHUB_ACTIVITIES {
    githubActivities {
      type
      ref
      commit
      name
      url
      message
      createdAt
      avatarUrl
      pullRequestAction
    }
  }
`;
