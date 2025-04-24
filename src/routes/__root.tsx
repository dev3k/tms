import {
  createRootRoute,
  ErrorComponent,
  Outlet,
} from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppShell } from "@/components/layout/app-shell.tsx";
import { NotFound } from "@/components/errors/not-found.tsx";
import { useTranslation } from "react-i18next";
import "@/i18n";
import { i18n } from "i18next";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface MyRouteContext {
  i18n: i18n;
}

export const Route = createRootRoute<MyRouteContext>({
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  errorComponent: ({ error }) => <ErrorComponent error={error} />,
  context: () => ({
    i18n: undefined,
  }),
});

function RootComponent() {
  const queryClient = new QueryClient();
  const i18n = useTranslation().i18n;
  Route.options.context = () => ({
    i18n,
  });

  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.body.dir = dir;
  }, [i18n.language]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppShell>
          <Outlet />
        </AppShell>
        {/*<TanStackRouterDevtools />*/}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
