import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/activities/online-courses/")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Online Courses",
  }),
});

function RouteComponent() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div>Hello "/activities/online-courses"!</div>
      </div>
    </>
  );
}
