import type { RouteObject } from "react-router";
import { RegistrationPage } from "../pages/registration";

export const routeTree: RouteObject[] = [
  {
    path: "registration",
    Component: RegistrationPage,
  },
];
