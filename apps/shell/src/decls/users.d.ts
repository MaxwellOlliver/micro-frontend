declare module "users/exports" {
  import type { Route } from "@tanstack/react-router";
  const routes: Route[];
  const RegistrationPage: React.ComponentType<unknown>;
  const UpdateUserPage: React.ComponentType<unknown>;
  export { routes, RegistrationPage, UpdateUserPage };
}
