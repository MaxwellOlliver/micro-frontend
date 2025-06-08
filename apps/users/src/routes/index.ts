import { createRoute } from "@tanstack/react-router";
import { RootRoute } from "@shared/router";
import { RegistrationPage } from "../pages/registration";
import { UpdateUserPage } from "../pages/update-user";

const RegistrationRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/registration",
  component: RegistrationPage,
});

const UpdateUserRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/update-user",
  component: UpdateUserPage,
});

export const routes = [RegistrationRoute, UpdateUserRoute];
