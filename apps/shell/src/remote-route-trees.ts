import type { RouteObject } from "react-router";

export const getRemoteRoutes = async (): Promise<RouteObject[]> => {
  const dashboard = await import("dashboard/exports");
  console.log("dashboard", dashboard);
  // const users = await import("users/exports");

  return [...dashboard.routeTree];
};
