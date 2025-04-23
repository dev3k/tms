import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header.tsx";

export const Route = createFileRoute("/activities/online-courses/")({
  component: RouteComponent,
});

function RouteComponent() {
  const breadcrumbs = [{ label: "Online Courses", isCurrentPage: true }];

  return (
    <>
      <PageHeader breadcrumbs={breadcrumbs} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div>Hello "/activities/online-courses"!</div>
      </div>
    </>
  );
}
