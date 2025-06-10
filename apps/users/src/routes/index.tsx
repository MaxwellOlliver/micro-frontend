import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { RegistrationPage } from "../pages/registration";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const registrationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "registration",
  component: RegistrationPage,
});

export const routeTree = rootRoute.addChildren([registrationRoute]);
