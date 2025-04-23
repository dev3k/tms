import {
  createRootRoute,
  ErrorComponent,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { AppShell } from "@/components/layout/app-shell.tsx";
import { NotFound } from "@/components/errors/not-found.tsx";

export const Route = createRootRoute({
  component: () => (
    <>
      <AppShell>
        <Outlet />
      </AppShell>
      <TanStackRouterDevtools />
    </>
  ),

  notFoundComponent: () => <NotFound />,
  errorComponent: ({ error }) => {
    // if (error instanceof MyCustomError) {
    //   // Render a custom error message
    //   return <div>{error.message}</div>
    // }

    // Fallback to the default ErrorComponent
    return <ErrorComponent error={error} />;
  },
});
