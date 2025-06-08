import { createRoute } from "@tanstack/react-router";
import { CartsPage } from "../pages/carts";
import { ProductsPage } from "../pages/products";
import { Outlet } from "@tanstack/react-router";
import { RootRoute } from "@shared/router";

const DashboardRootRoute = createRoute({
  getParentRoute: () => RootRoute,
  path: "/dashboard",

  component: () => (
    <>
      <Outlet />
      <div>Dashboard</div>
    </>
  ),
});

const CartsRoute = createRoute({
  getParentRoute: () => DashboardRootRoute,
  path: "/carts",
  component: CartsPage,
});

const ProductsRoute = createRoute({
  getParentRoute: () => DashboardRootRoute,
  path: "/products",
  component: ProductsPage,
});

export const routes = [
  DashboardRootRoute.addChildren([CartsRoute, ProductsRoute]),
];
