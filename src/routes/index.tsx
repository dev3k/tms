import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Leaderboard } from "@/features/dashboard/components/leaderboard.tsx";
import data from "@/data.json";
import { SectionCards } from "@/features/dashboard/components/section-cards.tsx";
import { ChartAreaInteractive } from "@/features/dashboard/components/chart-area-interactive.tsx";
import { DataTable } from "@/features/dashboard/components/data-table.tsx";

export const Route = createFileRoute("/")({
  component: Dashboard,
  loader: () => ({
    crumb: "Dashboard",
  }),
});

function Dashboard() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-2xl font-bold">{t("Dashboard")}</h1>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
      <Leaderboard />
    </>
  );
}
