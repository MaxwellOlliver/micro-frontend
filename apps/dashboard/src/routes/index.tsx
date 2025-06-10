import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { CartsPage } from "../pages/carts";
import { ProductsPage } from "../pages/products";

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const cartsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "carts",
  component: CartsPage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "products",
  component: ProductsPage,
});

export const routeTree = rootRoute.addChildren([cartsRoute, productsRoute]);
