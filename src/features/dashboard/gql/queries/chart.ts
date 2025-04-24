import gql from "graphql-tag";

export const CHART_QUERY = gql`
  query chartQuery(
    $fromDate: Date!
    $toDate: Date!
    $prevFromDate: Date!
    $prevToDate: Date!
    $period: PeriodTypesEnum!
  ) {
    performanceSummary(
      fromDate: $fromDate
      toDate: $toDate
      periodType: $period
    ) {
      period {
        fromDate
        toDate
        watchTime
        certificatesTaken
        avgViewDuration
        actualCompletion
        targetCompletion
      }
      overall {
        totalWatchTime
        avgViewDuration
      }
    }
    prevPerformanceSummary: performanceSummary(
      fromDate: $prevFromDate
      toDate: $prevToDate
      periodType: $period
    ) {
      overall {
        totalWatchTime
        avgViewDuration
      }
    }
  }
`;
