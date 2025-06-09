import { createBrowserRouter, Outlet } from "react-router";
import { getRemoteRoutes } from "../remote-route-trees";

export async function createAppRouter() {
  try {
    const remoteRoutes = await getRemoteRoutes();
    return createBrowserRouter([
      {
        path: "/",
        element: <Outlet />,
        children: remoteRoutes,
        errorElement: <div>Error</div>,
      },
    ]);
  } catch (error) {
    console.error(error);
  }
}
