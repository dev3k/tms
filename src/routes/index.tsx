import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorBoundary } from "@/components/error-boundary";

import { dashboardRoutes } from "@/features/dashboard/routes";
// import { authRoutes } from '@/features/auth/routes'
// import { userRoutes } from '@/features/users/routes'
// Import other feature routes

// Lazy-loaded pages
const NotFoundPage = lazy(() => import("@/pages/not-found"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    errorElement: <ErrorBoundary />,
    children: [
      ...dashboardRoutes,
      // ...userRoutes,
      // Other feature routes
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
