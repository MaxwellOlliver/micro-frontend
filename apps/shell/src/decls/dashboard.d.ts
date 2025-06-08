declare module "dashboard/exports" {
  import type { Route } from "@tanstack/react-router";
  const routes: Route[];
  const DashboardPage: React.ComponentType<unknown>;
  export { routes, DashboardPage };
}
