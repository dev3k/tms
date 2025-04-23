import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header.tsx";

export const Route = createFileRoute("/management/hierarchy")({
  component: RouteComponent,
});

function RouteComponent() {
  const breadcrumbs = [{ label: "Organization Groups", isCurrentPage: true }];

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div>Hello "/management/hierarchy"!</div>
    </>
  );
}
