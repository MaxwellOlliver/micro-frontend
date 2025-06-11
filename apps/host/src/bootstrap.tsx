import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { Button } from "@moondev/ui/components";
import "@moondev/ui/styles";

declare module "@tanstack/react-router" {
  interface Register {
    Root: typeof routeTree;
  }
}

async function startApp() {
  const router = createRouter({
    routeTree,
  });

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

startApp();
