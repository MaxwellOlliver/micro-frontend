export const getRemoteRoutes = async () => {
  const dashboard = await import("dashboard/exports");
  const users = await import("users/exports");

  return [...dashboard.routes, ...users.routes];
};
