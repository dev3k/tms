import gql from "graphql-tag";

export const LEADERBOARD_QUERY = gql`
  query leaderboardQuery(
    $fromDate: Date!
    $toDate: Date!
    $count: Int
    $cursor: String
    $advancedSearch: String
    $campaignId: ID
  ) {
    leaderBoard(
      first: $count
      fromDate: $fromDate
      toDate: $toDate
      after: $cursor
      advancedSearch: $advancedSearch
      campaignId: $campaignId
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          rank
          periodPoints
          user {
            id
            isCongratulated
            firstName
            lastName
            userprofile {
              ... on EmployeeProfileNode {
                id
                uploadedProfilePicture
                employeeId
                providedFullName
              }
            }
          }
        }
      }
    }
  }
`;
