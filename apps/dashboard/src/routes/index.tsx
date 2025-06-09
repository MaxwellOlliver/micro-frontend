import { CartsPage } from "../pages/carts";
import { ProductsPage } from "../pages/products";
import type { RouteObject } from "react-router";

export const routeTree: RouteObject[] = [
  {
    path: "dashboard",
    children: [
      {
        path: "carts",
        Component: CartsPage,
      },
      {
        path: "products",
        Component: ProductsPage,
      },
    ],
  },
];
