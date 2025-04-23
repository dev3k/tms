import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/management/hierarchy")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Organization Groups",
  }),
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/management/hierarchy"!</div>
    </>
  );
}
