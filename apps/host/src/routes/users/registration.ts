import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/users/registration")({
  component: lazyRouteComponent(() =>
    import("users/exports").then((m) => ({ default: m.RegistrationPage }))
  ),
  preload: true,
});
