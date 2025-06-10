import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routes";

export function App({ basename }: { basename: string }) {
  const router = createRouter({
    routeTree,
    basepath: basename,
  });

  return <RouterProvider router={router} />;
}
