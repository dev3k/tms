import { useQuery } from "@tanstack/react-query";
import { LEADERBOARD_QUERY } from "@/features/dashboard/gql/queries/leaderboard";
import { graphqlClient } from "@/lib/utils/graphql-client.ts";
import { LeaderboardQueryQuery } from "@/gql/graphql.ts";

export function Leaderboard() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const response = await graphqlClient.request<LeaderboardQueryQuery>(
        LEADERBOARD_QUERY,
        {
          fromDate: "2025-04-16",
          toDate: "2025-04-23",
          count: 10,
        },
      );
      return response.leaderBoard;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data?.totalCount}</div>;
}
