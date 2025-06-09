import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const RootRoute = createRootRoute({
  component: () => (
    <>
      <div style={{ background: "red", color: "white", padding: "10px" }}>
        ROOT ROUTE ATIVO
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
  ssr: false,
  notFoundComponent: () => <div>Not Found from root</div>,
});
