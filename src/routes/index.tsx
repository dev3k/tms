import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Leaderboard } from "@/features/dashboard/components/leaderboard.tsx";

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
      <Leaderboard />
      <h1 className="text-2xl font-bold">{t("Dashboard")}</h1>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </>
  );
}
