import type { RouteObject } from "react-router";

export const getRemoteRoutes = async (): Promise<RouteObject[]> => {
  const dashboard = await import("dashboard/exports");
  const users = await import("users/exports");

  console.log(dashboard.routeTree, users.routeTree);

  return [...dashboard.routeTree, ...users.routeTree];
};
