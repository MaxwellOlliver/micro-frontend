import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/products")({
  component: lazyRouteComponent(() =>
    import("dashboard/exports").then((m) => ({ default: m.ProductsPage }))
  ),
  preload: true,
});
