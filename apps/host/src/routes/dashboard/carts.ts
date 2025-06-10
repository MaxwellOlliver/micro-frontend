import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/carts")({
  component: lazyRouteComponent(() =>
    import("dashboard/exports").then((m) => ({ default: m.CartsPage }))
  ),
  preload: true,
});
